#!/usr/bin/env python3
"""
고려대학교 구로병원 공식 홈페이지 B022(병원뉴스) 실시간 자동 수집 스크립트
실행 방법: python3 scripts/sync_guro_news.py
동작: guro.kumc.or.kr B022 게시판의 최신 글 목록을 가져와 assets/guro_news.json 에 자동 저장합니다.
"""

import urllib.request
import json
import datetime
import re
import os
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_PATH = os.path.join(BASE_DIR, "assets", "guro_news.json")

# 고려대 구로병원 B022 (뉴스) API
API_URL = "https://guro.kumc.or.kr/api/article/30?instNo=2&boardNo=30&startIndex=1&pageRow=100"

def sync():
    print(f"[{datetime.datetime.now()}] 고려대 구로병원 B022 병원뉴스 수집 중...")
    req = urllib.request.Request(API_URL, headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "application/json"
    })
    
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"API 요청 실패: {e}", file=sys.stderr)
        return False

    articles = data.get("list", [])
    news_by_date = {}

    for a in articles:
        ts = a.get("createdDt")
        if not ts:
            continue
        dt_str = datetime.datetime.fromtimestamp(ts / 1000).strftime("%Y-%m-%d")
        title = a.get("title", "").strip().encode("utf-8", "ignore").decode("utf-8")
        article_no = a.get("articleNo")
        raw_content = a.get("content", "")
        clean = re.sub(r"<[^>]+>", " ", raw_content)
        clean = re.sub(r"&nbsp;", " ", clean)
        clean = re.sub(r"\s+", " ", clean).strip().encode("utf-8", "ignore").decode("utf-8")
        summary = (clean[:110] + "...") if len(clean) > 110 else clean
        if not summary:
            summary = "고려대학교 구로병원 공식 홈페이지 병원뉴스 본문에서 상세 내용을 확인하실 수 있습니다."

        if dt_str not in news_by_date:
            news_by_date[dt_str] = []

        news_by_date[dt_str].append({
            "category": "병원뉴스",
            "title": title,
            "summary": summary,
            "link": f"https://guro.kumc.or.kr/kr/B022/view.do?article={article_no}",
            "linkText": "병원뉴스 원문 보기"
        })

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(news_by_date, f, ensure_ascii=False, indent=2)

    total_articles = sum(len(v) for v in news_by_date.values())
    print(f"성공: 총 {total_articles}개 기사 ({len(news_by_date)}개 일자) 수집 완료 -> {OUTPUT_PATH}")
    return True

if __name__ == "__main__":
    sync()
