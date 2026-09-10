// 연도별 연구활동(research-study.html) + 연도별 QI활동(research-qi.html)
// 3차원 우주 은하(Cosmic Galaxy) 네트워크 마인드맵 데이터

(function (global) {
  var RESEARCH_STUDY = {
    2025: [
      { title: '신생아중환자실 부모참여돌봄 활동이 미숙아의 신체적 성장과 부모의 양육자신감에 미치는 영향', dept: 'NICU', featured: true },
      { title: '심혈관특수검사실에서 요골동맥을 이용한 관상동맥조영술 후 지혈밴드 첫 확인 30분 vs 60분: 지혈 성공 및 통증·혈종 비교 연구', dept: '심혈관특수검사실', featured: true },
      { title: '상급종합병원 임상간호사의 도덕적 민감성이 직무태도에 미치는 영향', dept: '73병동' },
      { title: '체크리스트 기반 정맥주사 사정·관리 강화 중재가 정맥염 발생에 미치는 효과', dept: '72병동' }
    ],
    2024: [
      { title: '경흉부 바늘생검(Transthoracic needle biopsy) 시행 예정 환자에게 제공한 동영상 교육프로그램이 환자의 불확실성, 불안 및 교육 만족도에 미치는 영향', dept: '60병동', featured: true },
      { title: '말초삽입중심정맥관(PICC) 폐색 예방을 위한 박동성 세정법과 지속정 세정법의 효과 비교연구', dept: '65병동' },
      { title: '자가투여 이행을 위한 면역증강제 투여 암환자의 경험적 탐색: Q방법론 접근', dept: '항암치료실' },
      { title: '중환자실 노인환자를 대상으로 한 섬망사정 도구의 신뢰도와 타당도 비교연구', dept: 'MICU', featured: true }
    ],
    2023: [
      { title: '연하곤란 간호중재요법이 뇌졸중 환자의 연하기능 및 가족의 간호지식에 미치는 효과', dept: '50병동', featured: true },
      { title: '요골동맥을 통한 관상동맥중재술(PCI) 환자에게 적용한 냉요법이 통증에 미치는 효과', dept: '100병동', featured: true }
    ]
  };

  var RESEARCH_QI = {
    2025: [
      { dept: '신생아중환자실', title: '투약프로토콜 준수를 통한 투약오류 감소', featured: true },
      { dept: '병동간호2팀', title: '전동 효율성 향상 활동' },
      { dept: '외래간호팀', title: '외래환자 진료동선 효율화를 통해 신뢰를 더하다' },
      { dept: '80병동', title: '돌봄제공자 욕창예방교육을 통한 환자안전 개선활동: 우리 모두 ONE TEAM!' },
      { dept: '응급실 QI팀', title: '전원 프로세스 개선을 통한 응급실 체류시간 감소' },
      { dept: '60병동', title: '같이의 가치, 욕창회복에 더 가까이+' },
      { dept: '병동간호1팀', title: '병상효율화 개선을 위한 11시 이전 조기퇴원율 향상', featured: true },
      { dept: '신관6층 외과병동(62,63)', title: '숨마다 회복으로' },
      { dept: '소화기내과 병동(82,83)', title: '부서 특성화 교육을 통한 자기효능감 향상' },
      { dept: '새근새근 드리팀(91병동)', title: 'Easy to EEG, Nursing to Lead: 소아수면 뇌파검사 프로세스 개선 활동', featured: true },
      { dept: 'Swift Move 101(101병동)', title: 'STOP 딜레이, GO 전실! 병상 회전율 UP!' },
      { dept: '병동간호2팀', title: '항상 그랬다 프로젝트 - 환자 경험 평가 향상 -' },
      { dept: '수술실 업무개선팀', title: '수술실 부서 특성화 프로그램 개발' },
      { dept: '드레싱전담팀', title: '셀프 드레싱 동영상 제작을 통한 환자 자가간호 교육 강화: 동영상, QR코드, App 활용', featured: true },
      { dept: '성인중환자실', title: '중환자실 안전사고 제로 챌린지(환자 안전사고 제로를 위한 개선활동)', featured: true },
      { dept: '인공신장실', title: "우리부서 안전을 위한 '한번 더 체크' 프로젝트(인공신장실 UF 오류 예방 활동)" },
      { dept: '수술환자인계팀(마취통증의학과)', title: '수술환자 안전한 인수인계' },
      { dept: '방사선종양학과', title: '폐암 환자 대상 홍보 강화를 통한 무표식 실시간 표면유도기법 적용 증대' },
      { dept: '61병동', title: 'Optiflow 관련 의료기기 욕창 예방: 안전한 간호중재로 해결하다!' }
    ],
    2024: [
      { dept: '63병동', title: '병동물품의 달인' },
      { dept: '91병동', title: '소아대상 근거중심의료기기관련 욕창예방활동' },
      { dept: '간호교육기획팀', title: '신규간호사 온/오프라인 교육활성화', featured: true },
      { dept: '병동간호1팀', title: '응급상황기록지 표준화를 통한 업무개선', featured: true },
      { dept: '병동간호2팀', title: '입원환자 맞춤형 운동요법 프로그램' },
      { dept: '수술실', title: '수술별 카트공급시스템 프로세스 개선' },
      { dept: '신생아중환자실', title: '체위지지간호교육 프로그램' },
      { dept: '인공신장실', title: '표준화된 인공신장실 교육 매뉴얼 개발' },
      { dept: '병동간호1팀', title: '기후행동 1.5℃를 디자인하라 1st(Paperless 시스템 구현)' },
      { dept: '83병동', title: '검사안내문 개발을 통한 환자 이해도와 간호사 만족도 증진' },
      { dept: '중환자실', title: '병원 내 중환자 이송 관련 환자안전사고 예방' },
      { dept: '외래간호팀', title: '환자 중심의 서비스로의 전환 외래진료예약 원스톱(One-Stop) 시스템 구축', featured: true },
      { dept: '외래간호팀', title: '숏폼(Short-Form) 콘텐츠 활용을 통한 정보제공강화 및 환자만족도 향상' },
      { dept: '92병동', title: '배액관 관리표준 지침 개발' },
      { dept: '61병동', title: '입원환자 정확한 흡입기 사용 및 복약순응도 개선활동' },
      { dept: '중앙공급실', title: '[CQI] 멸균 프로세스의 적정성과 효율성 향상 활동' },
      { dept: '마취통증의학과', title: '[CQI] 수술환자 PCA 관련 수행률 증가' },
      { dept: '중환자간호팀', title: '중환자 전담간호사의 성공적인 도입을 위한 전략' }
    ],
    2023: [
      { dept: '수술실 업무개선팀', title: '수술실 최적화를 위한 효율적인 팀운영 시스템 구축' },
      { dept: '신생아중환자실 QI팀', title: '투약오류 분석을 통한 투약오류 개선활동' },
      { dept: 'GS21(63병동)', title: '외과 수술안내문을 통한 환자 인지만족도 향상' },
      { dept: '심혈관특수검사실', title: '심혈관조영술 검사 애니메이션 개발과 적용으로 환자 이해도, 설명 만족도 향상과 불안감 감소 활동' },
      { dept: '병동간호2팀', title: '유연, 패턴근무 교대근무 틀을 깨다' },
      { dept: '85병동팀', title: '85병동 입원생활 안내 동영상 제공을 통한 의료서비스 질 향상' },
      { dept: '병동간호1팀', title: '의료기기 동영상 튜토리얼을 통한 업무만족도 향상' },
      { dept: '중환자간호팀', title: '중환자 교육과정 Repositioning' },
      { dept: '인공신장실', title: '혈액투석 정보제공 전산개발을 통한 인공신장실 전화업무 감소활동' },
      { dept: '간호부 업무개선TF', title: '[편리하GURO] 간호처치업무 효율성 향상을 위한 개선활동', featured: true },
      { dept: '베인저스(Veingers)(91병동)', title: '금쪽같은 우리의 정맥주사관리 대작전' },
      { dept: '중환자간호팀', title: '중환자실 인수인계 표준지침 개발을 통한 환자안전 증진활동', featured: true },
      { dept: '간호부 섬망관리TF', title: '수술 환자 섬망 관리 프로세스' },
      { dept: '병동간호1팀', title: '입원 환자 경험에 품격을 더하다' },
      { dept: '멸균 프로세스 개선팀', title: '멸균 프로세스 적정성과 효율성 향상활동' },
      { dept: '외래간호팀', title: '정시 진료문화 정착 활동' }
    ]
  };

  var YEARS = [2023, 2024, 2025];

  // 부서 정규화 맵 (상호 연계망 연결용)
  function getDeptKey(rawDept) {
    if (!rawDept) return '';
    var d = String(rawDept).trim();
    if (/NICU|신생아/i.test(d)) return 'nicu';
    if (/MICU|중환자실|성인중환자|중환자간호/i.test(d)) return 'icu';
    if (/수술실|마취통증/i.test(d)) return 'or';
    if (/외래간호/i.test(d)) return 'opd';
    if (/인공신장/i.test(d)) return 'hemo';
    if (/심혈관/i.test(d)) return 'cardio';
    if (/병동간호1/i.test(d)) return 'ward1';
    if (/병동간호2/i.test(d)) return 'ward2';
    if (/60병동/i.test(d)) return 'w60';
    if (/61병동/i.test(d)) return 'w61';
    if (/62|63/i.test(d)) return 'w63';
    if (/91|새근새근|베인저스/i.test(d)) return 'w91';
    if (/80병동/i.test(d)) return 'w80';
    if (/82|83|소화기/i.test(d)) return 'w83';
    return d;
  }

  function buildGraph() {
    var nodes = [];
    var links = [];

    // 코어 허브 (중앙 초대질량 스타)
    nodes.push({
      id: 'root',
      name: '고려대학교 구로병원 간호부',
      category: 'root',
      level: 0,
      val: 22,
      subtitle: '연구·QI 지식 은하계'
    });

    var catMeta = {
      research: { id: 'cat_research', name: '간호연구 활동 (10편)', href: 'research-study.html', val: 15 },
      qi: { id: 'cat_qi', name: 'QI 질향상 활동 (53편)', href: 'research-qi.html', val: 17 }
    };

    Object.keys(catMeta).forEach(function (cat) {
      var m = catMeta[cat];
      nodes.push({
        id: m.id,
        name: m.name,
        category: cat,
        level: 1,
        val: m.val,
        href: m.href
      });
      links.push({ source: 'root', target: m.id, weight: 3 });
    });

    var deptIndex = {};

    function addLeaf(cat, year, item, idx) {
      var id = 'leaf_' + cat + '_' + year + '_' + idx;
      var isFeatured = Boolean(item.featured);
      nodes.push({
        id: id,
        name: item.title,
        dept: item.dept,
        year: year,
        category: cat,
        level: 3,
        featured: isFeatured,
        val: isFeatured ? 5.8 : 3.4,
        href: cat === 'research' ? 'research-study.html' : 'research-qi.html'
      });

      var yearNodeId = 'year_' + cat + '_' + year;
      links.push({ source: yearNodeId, target: id, weight: 1 });

      var dKey = getDeptKey(item.dept);
      if (dKey) {
        if (!deptIndex[dKey]) deptIndex[dKey] = [];
        deptIndex[dKey].push(id);
      }
    }

    // 연도별 연구 서브허브
    YEARS.forEach(function (year) {
      var yid = 'year_research_' + year;
      var count = (RESEARCH_STUDY[year] || []).length;
      nodes.push({
        id: yid,
        name: year + '년 간호연구 (' + count + '건)',
        category: 'research',
        level: 2,
        val: 8.5,
        year: year,
        href: 'research-study.html'
      });
      links.push({ source: 'cat_research', target: yid, weight: 2 });
      (RESEARCH_STUDY[year] || []).forEach(function (item, idx) {
        addLeaf('research', year, item, idx);
      });
    });

    // 연도별 QI 서브허브
    YEARS.forEach(function (year) {
      var yid = 'year_qi_' + year;
      var count = (RESEARCH_QI[year] || []).length;
      nodes.push({
        id: yid,
        name: year + '년 QI활동 (' + count + '건)',
        category: 'qi',
        level: 2,
        val: 9.5,
        year: year,
        href: 'research-qi.html'
      });
      links.push({ source: 'cat_qi', target: yid, weight: 2 });
      (RESEARCH_QI[year] || []).forEach(function (item, idx) {
        addLeaf('qi', year, item, idx);
      });
    });

    // 연계 부서 간 크로스 성간 링크 (은하수 신경망 효과)
    Object.keys(deptIndex).forEach(function (key) {
      var ids = deptIndex[key];
      if (ids.length < 2) return;
      for (var i = 1; i < ids.length; i++) {
        links.push({ source: ids[i - 1], target: ids[i], cross: true });
      }
    });

    return { nodes: nodes, links: links };
  }

  global.RESEARCH_MINDMAP_DATA = buildGraph();
})(window);
