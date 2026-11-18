(function () {
  'use strict';

  /* ===========================================================
     1. DATA: 12 QUESTIONS (EXACT SPECIFICATION)
  =========================================================== */
  const QUESTIONS = [
    {
      id: 1,
      tag: 'STEP 01 · 구력 및 경험',
      text: '풋살 경험이 얼마나 있나요?',
      options: [
        { label: '처음 시작하는 입문자', w: { pivo: 1, ala: 2, fixo: 0, goleiro: 2 }, s: { exp: 18 } },
        { label: '6개월 미만', w: { pivo: 2, ala: 3, fixo: 1, goleiro: 2 }, s: { exp: 42 } },
        { label: '6개월 이상~2년 미만', w: { pivo: 3, ala: 3, fixo: 3, goleiro: 3 }, s: { exp: 72 } },
        { label: '2년 이상', w: { pivo: 4, ala: 3, fixo: 5, goleiro: 4 }, s: { exp: 95 } }
      ]
    },
    {
      id: 2,
      tag: 'STEP 02 · 기초 체력',
      text: '자신의 체력은 어느 정도인가요?',
      options: [
        { label: '체력이 약한 편이다', w: { pivo: 2, ala: 0, fixo: 2, goleiro: 6 }, s: { stamina: 24 } },
        { label: '보통이다', w: { pivo: 4, ala: 3, fixo: 4, goleiro: 4 }, s: { stamina: 54 } },
        { label: '좋은 편이다', w: { pivo: 4, ala: 7, fixo: 5, goleiro: 2 }, s: { stamina: 78 } },
        { label: '매우 좋고 오래 뛸 수 있다', w: { pivo: 4, ala: 10, fixo: 5, goleiro: 1 }, s: { stamina: 96 } }
      ]
    },
    {
      id: 3,
      tag: 'STEP 03 · 주력 및 민첩성',
      text: '순간적인 스피드에 자신 있나요?',
      options: [
        { label: '자신 없다', w: { pivo: 2, ala: 0, fixo: 4, goleiro: 5 }, s: { speed: 24 } },
        { label: '보통이다', w: { pivo: 4, ala: 3, fixo: 5, goleiro: 4 }, s: { speed: 54 } },
        { label: '빠른 편이다', w: { pivo: 5, ala: 8, fixo: 4, goleiro: 3 }, s: { speed: 78 } },
        { label: '매우 빠르다', w: { pivo: 6, ala: 10, fixo: 3, goleiro: 2 }, s: { speed: 96 } }
      ]
    },
    {
      id: 4,
      tag: 'STEP 04 · 공수 성향',
      text: '공격과 수비 중 무엇을 더 선호하나요?',
      options: [
        { label: '공격을 매우 선호한다', w: { pivo: 11, ala: 5, fixo: 0, goleiro: 0 }, s: { attack: 96, defense: 22 } },
        { label: '공격을 조금 더 선호한다', w: { pivo: 8, ala: 8, fixo: 2, goleiro: 1 }, s: { attack: 78, defense: 44 } },
        { label: '공격과 수비 모두 좋다', w: { pivo: 4, ala: 10, fixo: 6, goleiro: 3 }, s: { attack: 66, defense: 66 } },
        { label: '수비를 조금 더 선호한다', w: { pivo: 1, ala: 4, fixo: 9, goleiro: 7 }, s: { attack: 42, defense: 80 } },
        { label: '수비를 매우 선호한다', w: { pivo: 0, ala: 2, fixo: 11, goleiro: 10 }, s: { attack: 22, defense: 96 } }
      ]
    },
    {
      id: 5,
      tag: 'STEP 05 · 결정력',
      text: '슈팅과 득점에 얼마나 자신 있나요?',
      options: [
        { label: '자신 없다', w: { pivo: 0, ala: 2, fixo: 5, goleiro: 6 }, s: { shooting: 22 } },
        { label: '보통이다', w: { pivo: 3, ala: 5, fixo: 5, goleiro: 4 }, s: { shooting: 52 } },
        { label: '자신 있는 편이다', w: { pivo: 8, ala: 7, fixo: 4, goleiro: 2 }, s: { shooting: 78 } },
        { label: '슈팅과 득점이 가장 자신 있다', w: { pivo: 12, ala: 6, fixo: 2, goleiro: 0 }, s: { shooting: 98 } }
      ]
    },
    {
      id: 6,
      tag: 'STEP 06 · 수비력',
      text: '상대방의 공격을 막는 것에 자신 있나요?',
      options: [
        { label: '자신 없다', w: { pivo: 5, ala: 2, fixo: 0, goleiro: 0 }, s: { blocking: 24 } },
        { label: '보통이다', w: { pivo: 4, ala: 5, fixo: 4, goleiro: 3 }, s: { blocking: 54 } },
        { label: '자신 있다', w: { pivo: 2, ala: 7, fixo: 9, goleiro: 8 }, s: { blocking: 80 } },
        { label: '수비가 가장 자신 있다', w: { pivo: 1, ala: 5, fixo: 12, goleiro: 10 }, s: { blocking: 98 } }
      ]
    },
    {
      id: 7,
      tag: 'STEP 07 · 선호 플레이',
      text: '어떤 플레이를 가장 좋아하나요?',
      options: [
        { label: '직접 드리블하여 돌파하기', w: { pivo: 6, ala: 12, fixo: 2, goleiro: 0 }, s: { play: 'dribble' } },
        { label: '동료에게 패스하여 기회 만들기', w: { pivo: 4, ala: 8, fixo: 9, goleiro: 2 }, s: { play: 'pass' } },
        { label: '좋은 위치를 찾아 슈팅하기', w: { pivo: 13, ala: 5, fixo: 1, goleiro: 0 }, s: { play: 'shoot' } },
        { label: '상대의 공을 빼앗고 공격 차단하기', w: { pivo: 1, ala: 5, fixo: 13, goleiro: 5 }, s: { play: 'intercept' } },
        { label: '골문을 지키고 슈팅 막기', w: { pivo: 0, ala: 0, fixo: 3, goleiro: 16 }, s: { play: 'gk' } }
      ]
    },
    {
      id: 8,
      tag: 'STEP 08 · 볼 터치 및 키핑',
      text: '볼 컨트롤 능력은 어느 정도인가요?',
      options: [
        { label: '아직 공을 다루는 것이 어렵다', w: { pivo: 1, ala: 2, fixo: 1, goleiro: 5 }, s: { control: 26 } },
        { label: '기본적인 패스와 드리블이 가능하다', w: { pivo: 3, ala: 5, fixo: 4, goleiro: 4 }, s: { control: 56 } },
        { label: '공을 비교적 능숙하게 다룬다', w: { pivo: 7, ala: 8, fixo: 7, goleiro: 3 }, s: { control: 80 } },
        { label: '압박 상황에서도 공을 잘 지킬 수 있다', w: { pivo: 10, ala: 8, fixo: 9, goleiro: 3 }, s: { control: 96 } }
      ]
    },
    {
      id: 9,
      tag: 'STEP 09 · 시야 및 경기 운영',
      text: '경기 상황을 판단하는 능력은 어떤가요?',
      options: [
        { label: '경기 흐름을 파악하는 것이 어렵다', w: { pivo: 2, ala: 2, fixo: 0, goleiro: 1 }, s: { iq: 26 } },
        { label: '보통이다', w: { pivo: 4, ala: 5, fixo: 3, goleiro: 3 }, s: { iq: 55 } },
        { label: '동료와 상대의 움직임을 잘 파악한다', w: { pivo: 6, ala: 8, fixo: 8, goleiro: 7 }, s: { iq: 80 } },
        { label: '경기 전체를 보며 움직임을 지시할 수 있다', w: { pivo: 5, ala: 6, fixo: 12, goleiro: 10 }, s: { iq: 97 } }
      ]
    },
    {
      id: 10,
      tag: 'STEP 10 · 피지컬 및 경합',
      text: '몸싸움과 공 경합에 얼마나 자신 있나요?',
      options: [
        { label: '자신 없다', w: { pivo: 1, ala: 5, fixo: 1, goleiro: 2 }, s: { physical: 26 } },
        { label: '보통이다', w: { pivo: 4, ala: 6, fixo: 4, goleiro: 4 }, s: { physical: 56 } },
        { label: '자신 있다', w: { pivo: 8, ala: 5, fixo: 8, goleiro: 6 }, s: { physical: 80 } },
        { label: '적극적인 몸싸움과 경합을 즐긴다', w: { pivo: 10, ala: 4, fixo: 10, goleiro: 7 }, s: { physical: 96 } }
      ]
    },
    {
      id: 11,
      tag: 'STEP 11 · 골키퍼 성향',
      text: '골키퍼 역할에 관심이 있나요?',
      options: [
        { label: '전혀 관심 없다', w: { pivo: 2, ala: 2, fixo: 2, goleiro: -18 }, s: { gkInterest: 0 } },
        { label: '가끔 해보고 싶다', w: { pivo: 1, ala: 1, fixo: 2, goleiro: 4 }, s: { gkInterest: 38 } },
        { label: '관심이 많다', w: { pivo: 0, ala: 0, fixo: 2, goleiro: 14 }, s: { gkInterest: 78 } },
        { label: '골키퍼가 가장 하고 싶다', w: { pivo: 0, ala: 0, fixo: 1, goleiro: 24 }, s: { gkInterest: 100 } }
      ]
    },
    {
      id: 12,
      tag: 'STEP 12 · 팀 내 역할',
      text: '팀에서 어떤 역할을 하고 싶나요?',
      options: [
        { label: '골을 넣는 해결사', w: { pivo: 14, ala: 4, fixo: 0, goleiro: 0 }, s: { role: 'pivo' } },
        { label: '경기장을 활발하게 뛰어다니는 선수', w: { pivo: 3, ala: 14, fixo: 3, goleiro: 0 }, s: { role: 'ala' } },
        { label: '수비를 지휘하고 경기를 조율하는 선수', w: { pivo: 1, ala: 4, fixo: 14, goleiro: 3 }, s: { role: 'fixo' } },
        { label: '골문을 지키는 마지막 수비수', w: { pivo: 0, ala: 0, fixo: 4, goleiro: 18 }, s: { role: 'goleiro' } }
      ]
    }
  ];

  /* ===========================================================
     2. POSITIONS METADATA, SVGs, PITCH MAPS & DRILLS
  =========================================================== */
  const POSITIONS = {
    pivo: {
      key: 'pivo',
      nameKr: '피보',
      nameEn: 'PIVO',
      shortDesc: '최전방에서 득점과 공격의 마무리를 책임지는 팀의 에이스 스트라이커입니다. 수비를 등지고 공을 지켜낸 뒤 돌아서 슈팅하거나 동료에게 결정적인 찬스를 열어줍니다.',
      traits: ['#최전방 해결사', '#등지기 포스트플레이', '#원터치 슈팅'],
      pitchTitle: '피보(PIVO) 핵심 활동 구역 · 상대 페널티 라인 최전방',
      pitchDesc: '상대 골문 앞 중앙과 하프 스페이스를 중심으로 움직입니다. 수비수를 등지고 패스를 받아낸 뒤, 빠른 터닝 슈팅이나 2선 아라(ALA)에게 내주는 리턴 패스로 득점을 완성합니다.',
      iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21"/><line x1="3" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21" y2="12"/></svg>`,
      silhouetteSvg: `
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="96" cy="30" r="14" fill="#B8FF3B"/>
          <path d="M88 47 C74 52 60 66 50 78 L60 88 C68 79 75 72 82 69 L75 103 L48 134 L60 144 L86 116 L104 128 L122 158 L137 151 L117 114 L99 102 L106 70 L127 78 L142 66 L133 56 L118 63 L98 50 Z" fill="#FFFFFF"/>
          <path d="M98 50 L106 70 L99 102 L75 103 L82 69 Z" fill="#B8FF3B" fill-opacity="0.28"/>
          <circle cx="148" cy="146" r="11" fill="#B8FF3B"/>
          <path d="M126 146 L134 146" stroke="#B8FF3B" stroke-width="3" stroke-linecap="round"/>
          <path d="M118 138 L129 141" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`,
      drills: [
        {
          name: '등지기 후 180도 터닝 슈팅',
          purpose: '상대 수비 압박을 등지고 공을 받아 즉각 슈팅 각도를 여는 피보 핵심 기술을 익힙니다.',
          method: '골문을 등진 상태에서 발바닥(솔)으로 패스를 컨트롤한 뒤, 한 번의 페인트 모션 후 좌·우로 돌아서 토킥 또는 인스텝 슈팅을 시도합니다.',
          baseSets: 3,
          baseMin: 10
        },
        {
          name: '원터치 레이오프 & 침투(Give & Go)',
          purpose: '수비를 끌어당긴 뒤 2선 동료에게 공을 내주고 빈 공간으로 빠져들어 득점하는 연계를 강화합니다.',
          method: '벽이나 파트너에게 강하게 패스를 받아 원터치로 되돌려주고, 수비 뒷공간으로 3m 폭발 스프린트 후 마무리합니다.',
          baseSets: 4,
          baseMin: 8
        },
        {
          name: '좁은 박스 내 양발 퍼스트 터치',
          purpose: '좁은 풋살 페널티 지역에서 슈팅 타이밍을 0.5초 앞당기는 정교한 볼 컨트롤을 기릅니다.',
          method: '콘 4개로 2m 정사각형을 만들고 안에서 패스를 받아 단 한 번의 터치로 슈팅 자세를 세팅합니다.',
          baseSets: 3,
          baseMin: 10
        }
      ]
    },
    ala: {
      key: 'ala',
      nameKr: '아라',
      nameEn: 'ALA',
      shortDesc: '측면에서 폭발적인 스피드와 왕성한 활동량으로 공격과 수비를 끊임없이 오가는 팀의 엔진입니다. 1대1 돌파와 빠른 역습 전개, 측면 수비 복귀까지 다재다능하게 활약합니다.',
      traits: ['#공수 전환 엔진', '#측면 1대1 돌파', '#무한 활동량'],
      pitchTitle: '아라(ALA) 핵심 활동 구역 · 좌우 측면 터치라인 전역',
      pitchDesc: '양쪽 측면을 따라 공격 진영부터 수비 진영까지 가장 넓은 거리를 커버합니다. 측면에서 드리블 돌파와 컷백 패스를 만들고, 공을 잃으면 즉시 내려와 수비 라인을 채웁니다.',
      iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      silhouetteSvg: `
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="105" cy="30" r="13.5" fill="#B8FF3B"/>
          <path d="M94 46 L68 58 L46 72 L53 84 L74 72 L84 68 L73 102 L42 126 L51 139 L84 114 L98 119 L118 156 L133 149 L111 106 L96 98 L104 68 L124 80 L144 75 L141 62 L123 66 L104 49 Z" fill="#FFFFFF"/>
          <path d="M26 98 L46 98" stroke="#B8FF3B" stroke-width="3" stroke-linecap="round"/>
          <path d="M18 110 L42 110" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="144" cy="146" r="10.5" fill="#B8FF3B"/>
        </svg>`,
      drills: [
        {
          name: '발바닥 롤링(Sole Roll) 콘 슬라럼',
          purpose: '측면 좁은 공간에서 상대 수비의 중심을 무너뜨리는 풋살 특화 드리블 감각을 키웁니다.',
          method: '콘 6개를 1.2m 간격으로 세우고 발바닥으로 공을 굴리며 지그재그 돌파한 뒤, 마지막 콘에서 폭발적으로 가속합니다.',
          baseSets: 4,
          baseMin: 10
        },
        {
          name: '20m 왕복 셔틀 스프린트 (공수 전환)',
          purpose: '공격 가담 직후 수비로 빠르게 복귀하는 아라 특유의 반복 스프린트 지구력을 기릅니다.',
          method: '풋살 코트 사이드라인 20m를 전력 질주 후 15초 가벼운 조깅으로 회복하는 인터벌을 반복합니다.',
          baseSets: 4,
          baseMin: 8
        },
        {
          name: '측면 돌파 후 반대편 파포스트 컷백',
          purpose: '측면에서 골문 앞 피보나 반대쪽 아라에게 정확히 연결하는 결정적 어시스트 능력을 높입니다.',
          method: '사이드라인을 따라 드리블 후 엔드라인 부근에서 고개를 들고 낮고 빠른 인사이드 컷백 패스를 목표 콘에 맞힙니다.',
          baseSets: 3,
          baseMin: 10
        }
      ]
    },
    fixo: {
      key: 'fixo',
      nameKr: '픽소',
      nameEn: 'FIXO',
      shortDesc: '후방에서 상대의 공격을 차단하고 팀 전체의 빌드업과 수비 라인을 지휘하는 전술 사령관입니다. 침착한 판단력과 정확한 패스, 단단한 대인 수비로 팀의 중심을 잡습니다.',
      traits: ['#후방 수비 사령관', '#빌드업 조율사', '#패스 차단 인터셉트'],
      pitchTitle: '픽소(FIXO) 핵심 활동 구역 · 후방 중앙 및 하프라인',
      pitchDesc: '우리 진영 중앙에서 골문 앞 위험 지역을 잠그고, 상대 피보에게 향하는 패스 길을 사전에 차단합니다. 공격 시에는 후방에서 경기 흐름을 읽으며 정확한 킬패스를 공급합니다.',
      iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      silhouetteSvg: `
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="30" r="14" fill="#B8FF3B"/>
          <path d="M72 48 L44 68 L52 80 L74 66 L76 104 L56 154 L72 158 L89 116 L106 158 L122 154 L104 104 L106 66 L128 80 L136 68 L108 48 Z" fill="#FFFFFF"/>
          <path d="M76 58 L104 58 L102 100 L78 100 Z" fill="#B8FF3B" fill-opacity="0.25"/>
          <path d="M58 140 Q90 128 122 140" stroke="#B8FF3B" stroke-width="3" stroke-dasharray="5 5" stroke-linecap="round"/>
          <circle cx="90" cy="149" r="9.5" fill="#B8FF3B"/>
        </svg>`,
      drills: [
        {
          name: '사이드 스텝 지연 수비(Jockey) & 태클 타이밍',
          purpose: '성급하게 달려들지 않고 공격수의 주발 각도를 닫으며 완벽한 타이밍에 공을 빼앗는 법을 익힙니다.',
          method: '무릎을 낮추고 45도 사선 자세로 좌우 사이드 스텝을 유지하다가, 상대 터치가 길어지는 순간 앞발로 찔러 차단합니다.',
          baseSets: 4,
          baseMin: 9
        },
        {
          name: '압박 탈출 원투 패스 & 대각선 스위치 패스',
          purpose: '후방에서 상대의 전방 압박을 침착하게 풀어내고 반대쪽 측면으로 공격 방향을 전환합니다.',
          method: '스캔(고개 들어 주변 확인) 후 발바닥 트래핑으로 압박 각도를 피하고, 강하고 정확한 인사이드 패스로 10~15m 앞 타깃을 맞힙니다.',
          baseSets: 3,
          baseMin: 12
        },
        {
          name: '수비 콜링 & 패스 레인 차단 훈련',
          purpose: '동료들의 수비 위치를 조율하고 상대 피보로 들어가는 중앙 킬패스를 미리 예측하는 시야를 키웁니다.',
          method: '2대2 또는 3대3 미니게임에서 "왼쪽 막아!", "스위치!" 등 짧은 콜을 5초마다 외치며 중앙 패스 길을 등지고 서는 습관을 들입니다.',
          baseSets: 3,
          baseMin: 10
        }
      ]
    },
    goleiro: {
      key: 'goleiro',
      nameKr: '골레이로',
      nameEn: 'GOLEIRO',
      shortDesc: '동물적인 반사신경과 과감한 판단력으로 팀의 골문을 지키는 최후의 수호신입니다. 근거리 슈팅 선방은 물론, 정확한 던지기와 발밑 빌드업으로 역습의 시작점이 됩니다.',
      traits: ['#최후의 수호신', '#1대1 각도 좁히기', '#역습의 시작점'],
      pitchTitle: '골레이로(GOLEIRO) 핵심 활동 구역 · 페널티 에어리어 및 골문 앞',
      pitchDesc: '페널티 반원 안에서 슈팅 각도를 좁히며 골문을 방어합니다. 선방 직후 빠른 오버핸드 스로잉이나 정확한 패스로 전방 동료에게 즉각 역습 찬스를 만들어 줍니다.',
      iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6"/><path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`,
      silhouetteSvg: `
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="96" cy="48" r="13.5" fill="#B8FF3B"/>
          <path d="M84 62 L52 46 L34 38 L29 50 L50 61 L74 75 L58 106 L30 124 L39 136 L74 114 L92 104 L126 122 L152 106 L144 94 L122 106 L98 88 L112 68 L138 56 L132 44 L102 58 Z" fill="#FFFFFF"/>
          <circle cx="24" cy="37" r="10.5" fill="#B8FF3B"/>
          <path d="M40 28 L50 32" stroke="#B8FF3B" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M22 56 L30 62" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`,
      drills: [
        {
          name: '풋살 스플릿(Split) & X-블록 방어 자세',
          purpose: '가까운 거리에서 날아오는 강한 슈팅을 온몸으로 막아내는 풋살 골키퍼 전용 선방 기술을 익힙니다.',
          method: '슈팅 직전 한쪽 무릎을 낮추고 반대 발을 옆으로 뻗어 하단 공간을 완벽히 닫는 스플릿 자세를 좌우 번갈아 연습합니다.',
          baseSets: 4,
          baseMin: 8
        },
        {
          name: '벽 바운드 근거리 반사신경 캐칭',
          purpose: '예측하기 어려운 꺾이는 슛이나 굴절 볼에 즉각 반응하는 핸드-아이 협응력을 강화합니다.',
          method: '벽에서 2~3m 떨어져 파트너가 뒤에서 던져 벽에 맞고 튀어나오는 공을 보고 빠르게 손과 발로 반응해 막아냅니다.',
          baseSets: 3,
          baseMin: 10
        },
        {
          name: '선방 후 3초 역습 스로잉(볼 배급)',
          purpose: '공을 잡자마자 전방 빈 공간으로 정확히 연결해 팀의 역습 득점을 만들어내는 배급 능력을 기릅니다.',
          method: '공을 잡은 뒤 3초 안에 시야를 열고, 15~20m 거리의 콘 구역으로 낮고 빠르게 굴려주거나 볼링/오버핸드 스로잉으로 배달합니다.',
          baseSets: 3,
          baseMin: 10
        }
      ]
    }
  };

  const POSITION_ORDER = ['pivo', 'ala', 'fixo', 'goleiro'];

  /* ===========================================================
     3. STATE MANAGEMENT
  =========================================================== */
  let currentIndex = 0;
  let answers = new Array(QUESTIONS.length).fill(null);
  let latestAnalysis = null;
  let activePitchPos = 'pivo';
  let currentTrainingLevel = 2;

  /* ===========================================================
     4. DOM REFERENCES
  =========================================================== */
  const views = {
    home: document.getElementById('view-home'),
    quiz: document.getElementById('view-quiz'),
    analyzing: document.getElementById('view-analyzing'),
    result: document.getElementById('view-result')
  };

  const brandHomeBtn = document.getElementById('brandHomeBtn');
  const startTestBtn = document.getElementById('startTestBtn');
  const qNumCurrent = document.getElementById('qNumCurrent');
  const qProgressPercent = document.getElementById('qProgressPercent');
  const progressFill = document.getElementById('progressFill');
  const progressBarAria = document.getElementById('progressBarAria');
  const stepDots = document.getElementById('stepDots');
  const questionStage = document.getElementById('questionStage');
  const qCategoryTag = document.getElementById('qCategoryTag');
  const qTitle = document.getElementById('qTitle');
  const optionsList = document.getElementById('optionsList');
  const quizAlert = document.getElementById('quizAlert');
  const quizAlertText = document.getElementById('quizAlertText');
  const alertJumpBtn = document.getElementById('alertJumpBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const nextBtnText = document.getElementById('nextBtnText');

  const trainingIntensitySlider = document.getElementById('trainingIntensitySlider');
  const sliderValueBadge = document.getElementById('sliderValueBadge');
  const saveImageBtn = document.getElementById('saveImageBtn');
  const shareBtn = document.getElementById('shareBtn');
  const retryBtn = document.getElementById('retryBtn');
  const toastEl = document.getElementById('toast');

  /* ===========================================================
     5. NAVIGATION & VIEW HELPERS
  =========================================================== */
  function showView(name) {
    Object.keys(views).forEach(k => {
      views[k].classList.toggle('active', k === name);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  let toastTimer = null;
  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2800);
  }

  function hideQuizAlert() {
    quizAlert.classList.remove('show');
    alertJumpBtn.style.display = 'none';
  }

  function showQuizAlert(message, jumpToIndex = null) {
    quizAlertText.textContent = message;
    if (jumpToIndex !== null) {
      alertJumpBtn.style.display = 'inline-block';
      alertJumpBtn.dataset.jumpIndex = String(jumpToIndex);
    } else {
      alertJumpBtn.style.display = 'none';
    }
    quizAlert.classList.remove('show');
    void quizAlert.offsetWidth;
    quizAlert.classList.add('show');
  }

  /* ===========================================================
     6. QUIZ RENDERING & INTERACTION
  =========================================================== */
  function renderStepDots() {
    stepDots.innerHTML = '';
    QUESTIONS.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'step-dot';
      if (answers[idx] !== null) btn.classList.add('answered');
      if (idx === currentIndex) btn.classList.add('current');
      btn.setAttribute('aria-label', `${idx + 1}번 질문으로 이동`);
      btn.title = `질문 ${idx + 1}${answers[idx] !== null ? ' (응답 완료)' : ' (미응답)'}`;
      btn.addEventListener('click', () => {
        const dir = idx < currentIndex ? 'back' : 'forward';
        currentIndex = idx;
        hideQuizAlert();
        renderQuestion(dir);
      });
      stepDots.appendChild(btn);
    });
  }

  function renderQuestion(direction = 'forward') {
    const q = QUESTIONS[currentIndex];
    const answeredCount = answers.filter(a => a !== null).length;
    const stepPct = Math.round(((currentIndex + 1) / QUESTIONS.length) * 100);

    qNumCurrent.textContent = String(currentIndex + 1).padStart(2, '0');
    qProgressPercent.textContent = `응답 완료 ${answeredCount} / ${QUESTIONS.length}`;
    progressFill.style.width = `${stepPct}%`;
    progressBarAria.setAttribute('aria-valuenow', String(stepPct));

    renderStepDots();

    // Trigger smooth slide animation
    questionStage.classList.remove('slide-back');
    questionStage.style.animation = 'none';
    void questionStage.offsetWidth;
    questionStage.style.animation = '';
    if (direction === 'back') {
      questionStage.classList.add('slide-back');
    }

    qCategoryTag.textContent = q.tag;
    qTitle.textContent = `Q${q.id}. ${q.text}`;

    optionsList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E'];

    q.options.forEach((opt, optIdx) => {
      const isSelected = answers[currentIndex] === optIdx;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn' + (isSelected ? ' selected' : '');
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', String(isSelected));
      btn.innerHTML = `
        <span class="option-key">${letters[optIdx]}</span>
        <span class="option-label">${opt.label}</span>
        <span class="option-check" aria-hidden="true">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
      `;

      btn.addEventListener('click', () => {
        answers[currentIndex] = optIdx;
        hideQuizAlert();
        // Update selection visuals without re-triggering whole card slide
        const allBtns = optionsList.querySelectorAll('.option-btn');
        allBtns.forEach((b, i) => {
          const sel = i === optIdx;
          b.classList.toggle('selected', sel);
          b.setAttribute('aria-checked', String(sel));
        });
        const newAnsweredCount = answers.filter(a => a !== null).length;
        qProgressPercent.textContent = `응답 완료 ${newAnsweredCount} / ${QUESTIONS.length}`;
        renderStepDots();
      });

      optionsList.appendChild(btn);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtnText.textContent = currentIndex === QUESTIONS.length - 1 ? '결과 확인하기' : '다음 질문';
  }

  function handleNext() {
    if (answers[currentIndex] === null) {
      showQuizAlert(`질문 ${currentIndex + 1}번의 답변을 먼저 선택해 주세요!`);
      return;
    }

    if (currentIndex < QUESTIONS.length - 1) {
      currentIndex++;
      hideQuizAlert();
      renderQuestion('forward');
      return;
    }

    // Last question: verify ALL 12 questions are answered
    const unansweredIndices = [];
    answers.forEach((val, idx) => {
      if (val === null) unansweredIndices.push(idx);
    });

    if (unansweredIndices.length > 0) {
      const humanNums = unansweredIndices.map(i => `${i + 1}번`).join(', ');
      showQuizAlert(
        `모든 질문에 응답해야 결과를 확인할 수 있어요! 미응답 항목: ${humanNums} 질문`,
        unansweredIndices[0]
      );
      return;
    }

    // All 12 answered -> Analyze and display result
    showView('analyzing');
    latestAnalysis = analyzeAnswers(answers);
    setTimeout(() => {
      renderResult(latestAnalysis);
      showView('result');
    }, 780);
  }

  function handlePrev() {
    if (currentIndex > 0) {
      currentIndex--;
      hideQuizAlert();
      renderQuestion('back');
    }
  }

  /* ===========================================================
     7. SCORING ENGINE & DYNAMIC ANALYSIS GENERATOR
  =========================================================== */
  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, Math.round(val)));
  }

  function analyzeAnswers(ans) {
    // Compute theoretical min and max raw scores per position for accurate 0-100 normalization
    const raw = { pivo: 0, ala: 0, fixo: 0, goleiro: 0 };
    const minPossible = { pivo: 0, ala: 0, fixo: 0, goleiro: 0 };
    const maxPossible = { pivo: 0, ala: 0, fixo: 0, goleiro: 0 };

    QUESTIONS.forEach((q, qIdx) => {
      const chosen = q.options[ans[qIdx]];
      POSITION_ORDER.forEach(pos => {
        raw[pos] += chosen.w[pos];
        const vals = q.options.map(o => o.w[pos]);
        minPossible[pos] += Math.min(...vals);
        maxPossible[pos] += Math.max(...vals);
      });
    });

    // Synergy bonuses for realistic futsal profiles
    const q2Stamina = QUESTIONS[1].options[ans[1]].s.stamina;
    const q3Speed = QUESTIONS[2].options[ans[2]].s.speed;
    const q4Atk = QUESTIONS[3].options[ans[3]].s.attack;
    const q4Def = QUESTIONS[3].options[ans[3]].s.defense;
    const q5Shoot = QUESTIONS[4].options[ans[4]].s.shooting;
    const q6Block = QUESTIONS[5].options[ans[5]].s.blocking;
    const q7Play = QUESTIONS[6].options[ans[6]].s.play;
    const q8Control = QUESTIONS[7].options[ans[7]].s.control;
    const q9Iq = QUESTIONS[8].options[ans[8]].s.iq;
    const q10Phys = QUESTIONS[9].options[ans[9]].s.physical;
    const q11Gk = QUESTIONS[10].options[ans[10]].s.gkInterest;
    const q12Role = QUESTIONS[11].options[ans[11]].s.role;
    const q1Exp = QUESTIONS[0].options[ans[0]].s.exp;

    // Subtle futsal archetype synergies
    if (q5Shoot >= 78 && q10Phys >= 80) raw.pivo += 4;
    if (q2Stamina >= 78 && q3Speed >= 78) raw.ala += 5;
    if (q6Block >= 80 && q9Iq >= 80) raw.fixo += 5;
    if (q11Gk >= 78 && (q7Play === 'gk' || q12Role === 'goleiro')) raw.goleiro += 6;

    // Normalize to 0-100%
    const scores = {};
    POSITION_ORDER.forEach(pos => {
      const span = maxPossible[pos] - minPossible[pos];
      let pct = ((raw[pos] - minPossible[pos]) / span) * 100;
      // If user explicitly has zero interest in GK, keep Goleiro realistically low
      if (pos === 'goleiro' && q11Gk === 0) {
        pct = Math.min(pct, 34);
      }
      scores[pos] = clamp(pct, 8, 98);
    });

    // Determine best position (deterministic tie-breaker: Q12 role, then Q7 play)
    const sortedPositions = [...POSITION_ORDER].sort((a, b) => {
      if (scores[b] !== scores[a]) return scores[b] - scores[a];
      if (q12Role === a) return -1;
      if (q12Role === b) return 1;
      return raw[b] - raw[a];
    });
    const bestPosition = sortedPositions[0];

    // 6 Play Style Stats (0~100)
    const playAtkBonus = q7Play === 'shoot' ? 14 : q7Play === 'dribble' ? 10 : q7Play === 'pass' ? 4 : -6;
    const playDefBonus = q7Play === 'intercept' ? 14 : q7Play === 'gk' ? 12 : q7Play === 'pass' ? 4 : -6;
    const roleAtkBonus = q12Role === 'pivo' ? 8 : q12Role === 'ala' ? 4 : -4;
    const roleDefBonus = q12Role === 'fixo' || q12Role === 'goleiro' ? 8 : q12Role === 'ala' ? 3 : -5;

    const stats = {
      attack: clamp(q4Atk * 0.48 + q5Shoot * 0.42 + playAtkBonus + roleAtkBonus, 15, 99),
      defense: clamp(q4Def * 0.44 + q6Block * 0.42 + q10Phys * 0.1 + playDefBonus + roleDefBonus, 15, 99),
      speed: clamp(q3Speed * 0.84 + (q7Play === 'dribble' ? 8 : 0) + (q12Role === 'ala' ? 6 : 0) + q2Stamina * 0.08, 18, 99),
      stamina: clamp(q2Stamina * 0.86 + (q12Role === 'ala' ? 7 : 0) + q1Exp * 0.07, 18, 99),
      control: clamp(q8Control * 0.82 + q1Exp * 0.12 + (q7Play === 'dribble' || q7Play === 'pass' ? 6 : 0), 18, 99),
      iq: clamp(q9Iq * 0.8 + q1Exp * 0.12 + (q7Play === 'pass' || q7Play === 'intercept' ? 6 : 0) + (q12Role === 'fixo' ? 5 : 0), 18, 99)
    };

    // Generate Personalized Coach Message (2~3 sentences)
    const coachMessage = buildCoachMessage(bestPosition, {
      q1Exp, q2Stamina, q3Speed, q4Atk, q4Def, q5Shoot, q6Block, q7Play, q8Control, q9Iq, q10Phys, q11Gk, q12Role, stats
    });

    // Generate Dynamic Strengths (3) & Improvements (2)
    const { strengths, improvements } = buildStrengthsAndImprovements({
      bestPosition, q1Exp, q2Stamina, q3Speed, q4Atk, q4Def, q5Shoot, q6Block, q7Play, q8Control, q9Iq, q10Phys, q11Gk, q12Role, stats
    });

    return {
      bestPosition,
      sortedPositions,
      scores,
      stats,
      coachMessage,
      strengths,
      improvements,
      expLevel: ans[0] // 0..3
    };
  }

  function buildCoachMessage(pos, d) {
    const isBeginner = d.q1Exp <= 42;
    const isVeteran = d.q1Exp >= 72;

    if (pos === 'pivo') {
      let s1 = '';
      if (d.q5Shoot >= 78 && d.q12Role === 'pivo') {
        s1 = '골을 넣는 순간이 가장 짜릿하다고요? 그렇다면 팀의 해결사인 피보(PIVO)에 당장 도전해 보세요!';
      } else if (d.q10Phys >= 80 && d.q8Control >= 80) {
        s1 = '탄탄한 몸싸움과 압박 속에서도 공을 지키는 능력이 아주 인상적이에요! 최전방에서 수비를 등지고 기회를 만드는 피보(PIVO)가 딱 어울립니다.';
      } else {
        s1 = '공격적인 본능과 과감하게 골문을 노리는 성향이 돋보이네요! 팀의 득점을 책임지는 최전방 스트라이커 피보(PIVO)를 강력 추천해요.';
      }
      const s2 = d.q5Shoot >= 78
        ? '높은 슈팅 자신감과 득점 감각을 앞세워 상대 수비수에게 가장 위협적인 존재가 될 수 있어요.'
        : '공격 위치 선정 감각이 좋아 동료의 패스를 마무리하는 포스트 플레이를 익히면 빠르게 득점력이 올라갈 거예요.';
      const s3 = isBeginner
        ? '입문 단계라도 걱정 마세요—등지고 원터치로 내주는 기본기부터 시작하면 금세 팀의 에이스가 될 수 있어요!'
        : '수비를 등지고 돌아서는 타이밍에 2선 동료와의 연계까지 더하면 완벽한 해결사로 활약할 겁니다!';
      return `${s1} ${s2} ${s3}`;
    }

    if (pos === 'ala') {
      let s1 = '';
      if (d.q3Speed >= 78 && d.q2Stamina >= 78) {
        s1 = '빠른 스피드와 왕성한 활동량이 정말 강점이네요! 공격과 수비를 자유롭게 오가는 아라(ALA) 포지션이 딱 어울려요!';
      } else if (d.q7Play === 'dribble') {
        s1 = '측면에서 과감하게 드리블로 상대를 흔드는 플레이를 즐기시는군요! 팀의 공격 활로를 열어주는 아라(ALA)가 제격입니다.';
      } else {
        s1 = '공격과 수비의 밸런스가 좋고 경기장을 넓게 쓰는 성향이 매력적이에요! 팀의 엔진 역할을 맡는 아라(ALA) 포지션을 추천해요.';
      }
      const s2 = d.q8Control >= 80
        ? '능숙한 볼 컨트롤을 바탕으로 좁은 측면에서 1대1 돌파와 컷백 찬스를 만들어내는 데 큰 강점이 있어요.'
        : '활발한 움직임으로 빈 공간을 파고들며 팀 전체에 템포와 에너지를 불어넣어 줄 수 있는 타입이에요.';
      const s3 = isBeginner
        ? '처음에는 무리한 돌파보다 공수 전환 시 빠르게 복귀하는 습관만 잡아도 동료들이 가장 든든해할 거예요!'
        : '지금의 활동량에 반대편 포스트 침투 타이밍까지 더하면 상대 팀이 가장 막기 까다로운 측면 에이스가 될 거예요!';
      return `${s1} ${s2} ${s3}`;
    }

    if (pos === 'fixo') {
      let s1 = '';
      if (d.q9Iq >= 80 && d.q6Block >= 80) {
        s1 = '상대의 움직임을 읽고 공격을 차단하는 능력이 뛰어나군요! 팀의 든든한 수비 중심인 픽소(FIXO)를 추천해요!';
      } else if (d.q12Role === 'fixo') {
        s1 = '후방에서 경기를 조율하고 수비 라인을 지휘하고 싶은 리더십이 돋보이네요! 팀의 전술 사령관 픽소(FIXO)가 완벽하게 어울려요.';
      } else {
        s1 = '침착한 수비 감각과 안정적인 경기 운영 능력이 아주 훌륭해요! 팀의 밸런스를 단단히 잡아주는 픽소(FIXO) 포지션을 추천합니다.';
      }
      const s2 = d.q10Phys >= 80
        ? '적극적인 공 경합 능력까지 갖춰 상대 최전방 피보와의 싸움에서도 쉽게 밀리지 않을 거예요.'
        : '넓은 시야로 상대 패스 길을 미리 예측하고, 안전하게 공격의 첫 단추를 끼우는 빌드업에 강점이 있어요.';
      const s3 = isVeteran
        ? '풍부한 경험을 살려 코트 뒤에서 동료들에게 수비 콜링을 해주면 팀 경기력이 한 단계 더 올라갈 거예요!'
        : '앞으로 공을 빼앗은 뒤 1초 안에 전방 동료에게 찔러주는 패스 감각을 키우면 최고의 픽소로 성장할 수 있어요!';
      return `${s1} ${s2} ${s3}`;
    }

    // Goleiro
    let s1 = '';
    if (d.q11Gk >= 78 && d.q7Play === 'gk') {
      s1 = '결정적인 슈팅을 막아낼 때의 짜릿함을 아시는군요! 팀의 골문을 지키는 최후의 수호신 골레이로(GOLEIRO)가 딱 맞아요!';
    } else {
      s1 = '골문을 지키려는 책임감과 든든한 수비 집중력이 돋보이네요! 팀 승리의 마지막 자물쇠, 골레이로(GOLEIRO)를 추천해요!';
    }
    const s2 = d.q9Iq >= 80
      ? '코트 전체가 한눈에 들어오는 위치에서 뛰어난 경기 판단력으로 수비 라인까지 지휘할 수 있는 최고의 조건을 갖추셨어요.'
      : '상대 슈팅을 두려워하지 않는 수비 집중력과 과감함 덕분에 중요한 순간 팀을 구해내는 슈퍼세이브가 기대돼요.';
    const s3 = isBeginner
      ? '풋살 골레이로는 손뿐만 아니라 발과 몸으로 각도를 좁히는 매력이 크니, 기본 블로킹 자세부터 차근차근 즐겨보세요!'
      : '선방 직후 빠르고 정확한 스로잉으로 역습의 시발점까지 맡아주면 상대 팀에게는 그야말로 철벽 같은 존재가 될 거예요!';
    return `${s1} ${s2} ${s3}`;
  }

  function buildStrengthsAndImprovements(d) {
    const candidates = [
      {
        key: 'attack',
        score: d.stats.attack,
        sTitle: '날카로운 공격 본능과 득점 감각',
        sDesc: '기회가 왔을 때 주저하지 않고 골문을 노리는 적극적인 공격 마인드가 돋보입니다.',
        iTitle: '득점 찬스 마무리 자신감 키우기',
        iDesc: '골문 앞에서의 슈팅 선택지를 늘려두면 상대 수비가 당신을 더 경계하게 됩니다.'
      },
      {
        key: 'defense',
        score: d.stats.defense,
        sTitle: '안정적인 수비 집중력과 차단 능력',
        sDesc: '상대의 공격 흐름을 끊어내고 끝까지 따라붙는 끈질긴 수비 성향이 팀에 큰 안정감을 줍니다.',
        iTitle: '대인 수비 위치 선정과 복귀 속도',
        iDesc: '공을 빼앗긴 직후 수비 블록을 빠르게 갖추는 습관을 들이면 실점 위험이 크게 줄어듭니다.'
      },
      {
        key: 'speed',
        score: d.stats.speed,
        sTitle: '상대를 흔드는 폭발적인 순간 스피드',
        sDesc: '짧은 거리에서 빠르게 치고 나가는 주력이 좁은 풋살 코트에서 강력한 무기가 됩니다.',
        iTitle: '첫 3보 스타트 민첩성 보강',
        iDesc: '최고 속도보다 방향 전환 직후의 첫 2~3걸음 가속을 연습하면 돌파와 수비 모두 수월해져요.'
      },
      {
        key: 'stamina',
        score: d.stats.stamina,
        sTitle: '경기 끝까지 지치지 않는 왕성한 활동량',
        sDesc: '공수 전환이 빠른 풋살에서 후반까지 템포를 유지할 수 있는 훌륭한 체력을 보유하고 있어요.',
        iTitle: '고강도 인터벌 체력 분배',
        iDesc: '풋살은 짧은 전력 질주가 반복되므로, 무작정 뛰기보다 완급 조절과 인터벌 러닝으로 체력을 끌어올려 보세요.'
      },
      {
        key: 'control',
        score: d.stats.control,
        sTitle: '압박 속에서도 흔들리지 않는 볼 컨트롤',
        sDesc: '좁은 공간에서 발바닥 트래핑과 터치로 공을 지켜내며 여유 있게 다음 플레이를 연결할 수 있어요.',
        iTitle: '발바닥(솔) 퍼스트 터치 정교화',
        iDesc: '패스를 받을 때 발바닥으로 공을 멈추고 다음 동작으로 이어가는 기본기를 익히면 경기 여유가 확 달라집니다.'
      },
      {
        key: 'iq',
        score: d.stats.iq,
        sTitle: '경기 흐름을 읽는 뛰어난 전술 시야',
        sDesc: '동료와 상대의 움직임을 한 박자 먼저 파악해 가장 효율적인 패스와 움직임을 선택합니다.',
        iTitle: '공 받기 전 주변 스캔(Scanning) 습관',
        iDesc: '패스가 오기 직전 고개를 한 번 들어 빈 공간과 수비 위치를 미리 확인하면 판단 속도가 훨씬 빨라져요.'
      }
    ];

    // Extra contextual bonus for strengths/improvements
    if (d.q10Phys >= 80) {
      candidates.push({
        key: 'physical',
        score: d.q10Phys + 2,
        sTitle: '밀리지 않는 적극적인 몸싸움과 공 경합',
        sDesc: '1대1 경합 상황에서 과감하게 공을 지켜내고 빼앗아내는 투지가 팀의 기세를 끌어올립니다.',
        iTitle: '균형 잡힌 바디 밸런스 유지',
        iDesc: '어깨를 활용한 안전한 몸싸움 자세를 익히면 공 경합 승률이 높아집니다.'
      });
    }
    if (d.bestPosition === 'goleiro' && d.q11Gk >= 78) {
      candidates.push({
        key: 'gkSpirit',
        score: 97,
        sTitle: '골문을 책임지는 높은 집중력과 도전 의지',
        sDesc: '골키퍼 포지션에 대한 열정이 높아 팀에서 가장 귀하고 든든한 핵심 자원이 될 수 있습니다.',
        iTitle: '발밑 빌드업 연결 연습',
        iDesc: '손 선방뿐만 아니라 발로 안정적인 패스를 연결하면 현대 풋살형 골레이로로 진화할 수 있어요.'
      });
    }

    const sortedDesc = [...candidates].sort((a, b) => b.score - a.score);
    const strengths = sortedDesc.slice(0, 3).map(item => ({
      title: item.sTitle,
      desc: item.sDesc
    }));

    // Improvements: pick 2 lowest core stats (exclude goleiro stamina/speed penalizing harshly if other stats are lower, still accurate to user answers)
    const coreSix = candidates.slice(0, 6);
    const sortedAsc = [...coreSix].sort((a, b) => a.score - b.score);
    const improvements = sortedAsc.slice(0, 2).map(item => ({
      title: item.iTitle,
      desc: item.iDesc
    }));

    return { strengths, improvements };
  }

  /* ===========================================================
     8. RENDER RESULT SCREEN
  =========================================================== */
  function renderResult(analysis) {
    const pos = POSITIONS[analysis.bestPosition];
    const bestScore = analysis.scores[analysis.bestPosition];

    // ① Player Card Hero
    document.getElementById('resPosKr').textContent = pos.nameKr;
    document.getElementById('resPosEn').textContent = pos.nameEn;
    document.getElementById('resPosDesc').textContent = pos.shortDesc;
    document.getElementById('resFitScore').textContent = `${bestScore}%`;
    document.getElementById('resShieldCode').textContent = pos.nameEn;
    document.getElementById('resPosIconBox').innerHTML = `<div style="color:var(--neon);">${pos.iconSvg}</div>`;
    document.getElementById('resSilhouetteBox').innerHTML = pos.silhouetteSvg;

    const traitsRow = document.getElementById('resTraitsRow');
    traitsRow.innerHTML = pos.traits.map(t => `<span class="trait-pill">${t}</span>`).join('');

    // Top 3 stats preview inside Player Card
    const statLabelsShort = [
      { k: 'attack', label: 'ATK' },
      { k: 'defense', label: 'DEF' },
      { k: 'speed', label: 'SPD' },
      { k: 'stamina', label: 'STA' },
      { k: 'control', label: 'CTR' },
      { k: 'iq', label: 'VIS' }
    ];
    const top3Mini = [...statLabelsShort]
      .sort((a, b) => analysis.stats[b.k] - analysis.stats[a.k])
      .slice(0, 3);
    document.getElementById('resMiniStats').innerHTML = top3Mini.map(item => `
      <div class="fut-mini-stat">
        <strong>${analysis.stats[item.k]}</strong>
        <span>${item.label}</span>
      </div>
    `).join('');

    // ③ Coach Quote
    document.getElementById('resCoachQuote').textContent = `"${analysis.coachMessage}"`;

    // ② Position Suitability Bars (ordered high to low)
    const suitList = document.getElementById('suitabilityList');
    suitList.innerHTML = '';
    analysis.sortedPositions.forEach((pKey, idx) => {
      const pInfo = POSITIONS[pKey];
      const pct = analysis.scores[pKey];
      const isTop = idx === 0;
      const item = document.createElement('div');
      item.className = 'suit-item' + (isTop ? ' top' : '');
      item.innerHTML = `
        <div class="suit-row-head">
          <div class="suit-name-wrap">
            <div class="suit-icon-sm">${pInfo.iconSvg}</div>
            <span class="suit-name">${pInfo.nameKr}</span>
            <span class="suit-en">${pInfo.nameEn}</span>
            ${isTop ? '<span class="suit-best-tag">BEST</span>' : ''}
          </div>
          <span class="suit-score">${pct}%</span>
        </div>
        <div class="suit-track">
          <div class="suit-bar" data-target="${pct}"></div>
        </div>
      `;
      suitList.appendChild(item);
    });

    // ④ Play Style Radar + 6 Stat Bars
    renderRadarChart(analysis.stats);
    renderStatBars(analysis.stats);

    // Animate bars after paint
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.querySelectorAll('.suit-bar, .stat-mini-fill').forEach(bar => {
          bar.style.width = `${bar.dataset.target}%`;
        });
      }, 80);
    });

    // ⑤ Strengths & Improvements
    document.getElementById('strengthsList').innerHTML = analysis.strengths.map((s, i) => `
      <div class="analysis-item strength">
        <div class="analysis-num">0${i + 1}</div>
        <div>
          <div class="analysis-title">${s.title}</div>
          <div class="analysis-desc">${s.desc}</div>
        </div>
      </div>
    `).join('');

    document.getElementById('improvementsList').innerHTML = analysis.improvements.map((imp, i) => `
      <div class="analysis-item improve">
        <div class="analysis-num">0${i + 1}</div>
        <div>
          <div class="analysis-title">${imp.title}</div>
          <div class="analysis-desc">${imp.desc}</div>
        </div>
      </div>
    `).join('');

    // ⑥ Drills + Slider
    document.getElementById('drillsPosBadge').textContent = `${pos.nameEn} DRILLS`;
    currentTrainingLevel = analysis.expLevel >= 2 ? 3 : 2;
    trainingIntensitySlider.value = String(currentTrainingLevel);
    updateSliderVisual(currentTrainingLevel);
    renderDrills(pos, currentTrainingLevel, analysis.expLevel);

    // ⑦ Top-down Futsal Pitch Map
    activePitchPos = analysis.bestPosition;
    renderPitchControls();
    renderPitchMap(activePitchPos, analysis.bestPosition);
  }

  /* ---------- SVG Hexagonal Radar Chart ---------- */
  function renderRadarChart(stats) {
    const svg = document.getElementById('radarSvg');
    const cx = 150;
    const cy = 140;
    const maxR = 92;
    const axes = [
      { key: 'attack', label: '공격 성향' },
      { key: 'speed', label: '스피드' },
      { key: 'control', label: '볼 컨트롤' },
      { key: 'iq', label: '경기 판단력' },
      { key: 'defense', label: '수비 성향' },
      { key: 'stamina', label: '체력' }
    ];

    const angleOf = i => (Math.PI * 2 * i) / axes.length - Math.PI / 2;
    const pt = (r, i) => [cx + r * Math.cos(angleOf(i)), cy + r * Math.sin(angleOf(i))];

    let html = `
      <defs>
        <linearGradient id="radarFillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#B8FF3B" stop-opacity="0.46" />
          <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.28" />
        </linearGradient>
      </defs>
    `;

    // Grid rings
    [0.25, 0.5, 0.75, 1].forEach(level => {
      const pts = axes.map((_, i) => pt(maxR * level, i).map(n => n.toFixed(1)).join(',')).join(' ');
      html += `<polygon points="${pts}" fill="none" stroke="rgba(255,255,255,${level === 1 ? 0.22 : 0.1})" stroke-width="1.2" />`;
    });

    // Axis spokes & labels
    axes.forEach((ax, i) => {
      const [x2, y2] = pt(maxR, i);
      const [lx, ly] = pt(maxR + 26, i);
      html += `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(255,255,255,0.12)" stroke-width="1" />`;
      html += `<text x="${lx.toFixed(1)}" y="${(ly + 4).toFixed(1)}" text-anchor="middle" fill="#DCE6F7" font-size="11.5" font-weight="700" font-family="Noto Sans KR, sans-serif">${ax.label}</text>`;
    });

    // Data polygon
    const dataPts = axes.map((ax, i) => {
      const r = (stats[ax.key] / 100) * maxR;
      return pt(r, i);
    });
    const polyStr = dataPts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
    html += `<polygon points="${polyStr}" fill="url(#radarFillGrad)" stroke="#B8FF3B" stroke-width="2.5" stroke-linejoin="round" />`;

    // Data vertex dots
    dataPts.forEach(([x, y]) => {
      html += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.5" fill="#B8FF3B" stroke="#0B132B" stroke-width="1.8" />`;
    });

    svg.innerHTML = html;
  }

  function renderStatBars(stats) {
    const items = [
      { key: 'attack', label: '공격 성향' },
      { key: 'defense', label: '수비 성향' },
      { key: 'speed', label: '스피드' },
      { key: 'stamina', label: '체력' },
      { key: 'control', label: '볼 컨트롤' },
      { key: 'iq', label: '경기 판단력' }
    ];
    const grid = document.getElementById('statBarsGrid');
    grid.innerHTML = items.map(it => `
      <div class="stat-mini-card">
        <div class="stat-mini-top">
          <span>${it.label}</span>
          <span class="stat-mini-val">${stats[it.key]}</span>
        </div>
        <div class="stat-mini-track">
          <div class="stat-mini-fill" data-target="${stats[it.key]}"></div>
        </div>
      </div>
    `).join('');
  }

  /* ---------- Training Drills + Slider ---------- */
  function updateSliderVisual(level) {
    const labels = {
      1: '입문·회복 루틴 · 주 1회',
      2: '표준 밸런스 루틴 · 주 2회',
      3: '실력 향상 추천 루틴 · 주 3회',
      4: '고강도 집중 루틴 · 주 4회',
      5: '세미프로 하드 트레이닝 · 주 5회'
    };
    sliderValueBadge.textContent = labels[level];
    const pct = ((level - 1) / 4) * 100;
    trainingIntensitySlider.style.background = `linear-gradient(90deg, #B8FF3B ${pct}%, rgba(255,255,255,0.16) ${pct}%)`;
  }

  function renderDrills(pos, level, expLevel) {
    const multMap = { 1: 0.75, 2: 1, 3: 1.25, 4: 1.5, 5: 1.75 };
    const mult = multMap[level];
    const coachTip = expLevel <= 1
      ? '초보자 팁: 속도보다 정확한 자세와 터치 감각에 집중해 보세요.'
      : '숙련자 팁: 실제 경기처럼 시야를 들고 1초 안에 다음 동작까지 연결하세요.';

    const grid = document.getElementById('drillsGrid');
    grid.innerHTML = pos.drills.map((d, idx) => {
      const sets = Math.max(2, Math.round(d.baseSets * mult));
      const mins = Math.max(6, Math.round(d.baseMin * mult));
      return `
        <div class="drill-card">
          <div class="drill-top">
            <span class="drill-step">DRILL 0${idx + 1}</span>
            <span class="drill-volume">${sets}세트 · 약 ${mins}분</span>
          </div>
          <h4 class="drill-name">${d.name}</h4>
          <div class="drill-meta-block">
            <strong>목적:</strong>${d.purpose}
          </div>
          <div class="drill-meta-block">
            <strong>방법:</strong>${d.method}
          </div>
          <div style="margin-top:auto; padding-top:8px; border-top:1px dashed rgba(255,255,255,0.1); font-size:0.78rem; color:var(--neon);">
            ${coachTip}
          </div>
        </div>
      `;
    }).join('');
  }

  /* ---------- Top-Down Futsal Court Position Map ---------- */
  function renderPitchControls() {
    const wrap = document.getElementById('pitchToggleRow');
    wrap.innerHTML = POSITION_ORDER.map(pKey => {
      const p = POSITIONS[pKey];
      const isBest = latestAnalysis && latestAnalysis.bestPosition === pKey;
      const isActive = activePitchPos === pKey;
      return `
        <button type="button" class="pitch-pos-btn ${isActive ? 'active' : ''}" data-pos="${pKey}">
          ${p.nameKr}${isBest ? ' ★' : ''}
        </button>
      `;
    }).join('');

    wrap.querySelectorAll('.pitch-pos-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activePitchPos = btn.dataset.pos;
        renderPitchControls();
        renderPitchMap(activePitchPos, latestAnalysis.bestPosition);
      });
    });
  }

  function renderPitchMap(posKey, bestPosKey) {
    const svg = document.getElementById('pitchMapSvg');
    const info = POSITIONS[posKey];
    document.getElementById('pitchZoneTitle').textContent = info.pitchTitle + (posKey === bestPosKey ? ' (내 추천 포지션)' : '');
    document.getElementById('pitchZoneDesc').textContent = info.pitchDesc;

    // Zone shapes & markers (Attack direction: Left -> Right)
    const zones = {
      pivo: `
        <ellipse cx="378" cy="140" rx="68" ry="82" fill="url(#zoneGlow)" />
        <path d="M356 140 L422 140 M372 104 L416 124 M372 176 L416 156" stroke="#B8FF3B" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#arrowHead)" />
        <circle cx="366" cy="140" r="24" fill="#B8FF3B" fill-opacity="0.25" class="marker-pulse" />
        <circle cx="366" cy="140" r="15" fill="#B8FF3B" stroke="#0B132B" stroke-width="2.5" />
        <text x="366" y="144" text-anchor="middle" fill="#0B132B" font-size="9.5" font-weight="900" font-family="Chakra Petch, sans-serif">PIVO</text>
      `,
      ala: `
        <ellipse cx="264" cy="58" rx="126" ry="38" fill="url(#zoneGlow)" />
        <ellipse cx="264" cy="222" rx="126" ry="38" fill="url(#zoneGlow)" />
        <path d="M168 58 L356 58" stroke="#B8FF3B" stroke-width="2.2" stroke-dasharray="6 4" marker-end="url(#arrowHead)" />
        <path d="M356 222 L168 222" stroke="#B8FF3B" stroke-width="2.2" stroke-dasharray="6 4" marker-end="url(#arrowHead)" />
        <circle cx="264" cy="58" r="22" fill="#B8FF3B" fill-opacity="0.25" class="marker-pulse" />
        <circle cx="264" cy="58" r="14" fill="#B8FF3B" stroke="#0B132B" stroke-width="2.5" />
        <text x="264" y="61.5" text-anchor="middle" fill="#0B132B" font-size="9.5" font-weight="900" font-family="Chakra Petch, sans-serif">ALA</text>
        <circle cx="264" cy="222" r="22" fill="#B8FF3B" fill-opacity="0.25" class="marker-pulse" />
        <circle cx="264" cy="222" r="14" fill="#B8FF3B" stroke="#0B132B" stroke-width="2.5" />
        <text x="264" y="225.5" text-anchor="middle" fill="#0B132B" font-size="9.5" font-weight="900" font-family="Chakra Petch, sans-serif">ALA</text>
      `,
      fixo: `
        <ellipse cx="164" cy="140" rx="68" ry="86" fill="url(#zoneGlow)" />
        <path d="M164 140 L248 140 M164 140 L226 84 M164 140 L226 196" stroke="#B8FF3B" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#arrowHead)" />
        <circle cx="164" cy="140" r="24" fill="#B8FF3B" fill-opacity="0.25" class="marker-pulse" />
        <circle cx="164" cy="140" r="15" fill="#B8FF3B" stroke="#0B132B" stroke-width="2.5" />
        <text x="164" y="144" text-anchor="middle" fill="#0B132B" font-size="9.5" font-weight="900" font-family="Chakra Petch, sans-serif">FIXO</text>
      `,
      goleiro: `
        <ellipse cx="64" cy="140" rx="46" ry="70" fill="url(#zoneGlow)" />
        <path d="M74 140 L176 92 M74 140 L176 188" stroke="#B8FF3B" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#arrowHead)" />
        <circle cx="56" cy="140" r="24" fill="#B8FF3B" fill-opacity="0.25" class="marker-pulse" />
        <circle cx="56" cy="140" r="15" fill="#B8FF3B" stroke="#0B132B" stroke-width="2.5" />
        <text x="56" y="144" text-anchor="middle" fill="#0B132B" font-size="9.5" font-weight="900" font-family="Chakra Petch, sans-serif">GK</text>
      `
    };

    // Faint reference markers for other teammates
    const ghostMarkers = [
      { k: 'goleiro', x: 56, y: 140, lbl: 'GK' },
      { k: 'fixo', x: 164, y: 140, lbl: 'FX' },
      { k: 'ala', x: 264, y: 58, lbl: 'AL' },
      { k: 'ala', x: 264, y: 222, lbl: 'AL' },
      { k: 'pivo', x: 366, y: 140, lbl: 'PV' }
    ].filter(m => m.k !== posKey).map(m => `
      <circle cx="${m.x}" cy="${m.y}" r="10" fill="#13264D" stroke="rgba(255,255,255,0.28)" stroke-width="1.3" />
      <text x="${m.x}" y="${m.y + 3.5}" text-anchor="middle" fill="rgba(255,255,255,0.45)" font-size="8" font-weight="700" font-family="Chakra Petch, sans-serif">${m.lbl}</text>
    `).join('');

    svg.innerHTML = `
      <defs>
        <radialGradient id="zoneGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#B8FF3B" stop-opacity="0.38" />
          <stop offset="70%" stop-color="#B8FF3B" stop-opacity="0.14" />
          <stop offset="100%" stop-color="#B8FF3B" stop-opacity="0" />
        </radialGradient>
        <marker id="arrowHead" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#B8FF3B" />
        </marker>
      </defs>
      <!-- Court Stripes -->
      <rect x="20" y="18" width="440" height="244" rx="10" fill="#0F2844" stroke="rgba(255,255,255,0.34)" stroke-width="2" />
      <rect x="64" y="18" width="44" height="244" fill="rgba(255,255,255,0.025)" />
      <rect x="152" y="18" width="44" height="244" fill="rgba(255,255,255,0.025)" />
      <rect x="240" y="18" width="44" height="244" fill="rgba(255,255,255,0.025)" />
      <rect x="328" y="18" width="44" height="244" fill="rgba(255,255,255,0.025)" />
      <rect x="416" y="18" width="44" height="244" fill="rgba(255,255,255,0.025)" />
      <!-- Center Line & Circle -->
      <line x1="240" y1="18" x2="240" y2="262" stroke="rgba(255,255,255,0.32)" stroke-width="1.8" />
      <circle cx="240" cy="140" r="42" fill="none" stroke="rgba(255,255,255,0.32)" stroke-width="1.8" />
      <circle cx="240" cy="140" r="3.5" fill="#FFFFFF" fill-opacity="0.7" />
      <!-- Penalty Areas -->
      <path d="M20 76 A64 64 0 0 1 20 204" fill="none" stroke="rgba(255,255,255,0.34)" stroke-width="1.8" />
      <path d="M460 76 A64 64 0 0 0 460 204" fill="none" stroke="rgba(255,255,255,0.34)" stroke-width="1.8" />
      <!-- Goals -->
      <rect x="12" y="110" width="8" height="60" rx="2" fill="#38BDF8" fill-opacity="0.85" />
      <rect x="460" y="110" width="8" height="60" rx="2" fill="#B8FF3B" fill-opacity="0.85" />
      <!-- Direction Label -->
      <text x="38" y="34" fill="rgba(255,255,255,0.55)" font-size="9.5" font-weight="700">우리 골문</text>
      <text x="442" y="34" text-anchor="end" fill="#B8FF3B" font-size="9.5" font-weight="700">공격 방향 ▶</text>
      ${ghostMarkers}
      ${zones[posKey]}
    `;
  }

  /* ===========================================================
     9. SAVE RESULT AS HIGH-RES PNG (CANVAS - OFFLINE SAFE!)
  =========================================================== */
  function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
    const words = text.split(' ');
    let line = '';
    let linesDrawn = 0;
    for (let i = 0; i < words.length; i++) {
      const testLine = line ? `${line} ${words[i]}` : words[i];
      if (ctx.measureText(testLine).width > maxWidth && line) {
        ctx.fillText(line, x, y + linesDrawn * lineHeight);
        linesDrawn++;
        line = words[i];
        if (linesDrawn >= maxLines - 1) break;
      } else {
        line = testLine;
      }
    }
    if (line && linesDrawn < maxLines) {
      ctx.fillText(line, x, y + linesDrawn * lineHeight);
      linesDrawn++;
    }
    return y + linesDrawn * lineHeight;
  }

  function drawRoundedRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function downloadResultCard() {
    if (!latestAnalysis) return;
    const pos = POSITIONS[latestAnalysis.bestPosition];
    const W = 1080;
    const H = 1440;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    // Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, '#091128');
    bgGrad.addColorStop(0.5, '#0B132B');
    bgGrad.addColorStop(1, '#101D40');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Ambient Neon Glow
    const glow = ctx.createRadialGradient(840, 260, 20, 840, 260, 420);
    glow.addColorStop(0, 'rgba(184, 255, 59, 0.24)');
    glow.addColorStop(1, 'rgba(184, 255, 59, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);

    // Subtle Court Lines
    ctx.strokeStyle = 'rgba(184, 255, 59, 0.08)';
    ctx.lineWidth = 3;
    ctx.strokeRect(48, 48, W - 96, H - 96);
    ctx.beginPath();
    ctx.arc(W / 2, H / 2, 160, 0, Math.PI * 2);
    ctx.stroke();

    // Header Brand
    ctx.fillStyle = '#B8FF3B';
    ctx.font = '900 34px "Chakra Petch", sans-serif';
    ctx.fillText('FUTSAL FIT', 84, 118);
    ctx.fillStyle = '#94A3B8';
    ctx.font = '700 22px "Noto Sans KR", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('맞춤형 풋살 포지션 분석 리포트', W - 84, 116);
    ctx.textAlign = 'left';

    // Main Player Card Box
    drawRoundedRect(ctx, 76, 154, W - 152, 340, 28);
    ctx.fillStyle = 'rgba(21, 34, 70, 0.94)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(184, 255, 59, 0.55)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Badge
    drawRoundedRect(ctx, 112, 190, 250, 40, 20);
    ctx.fillStyle = '#B8FF3B';
    ctx.fill();
    ctx.fillStyle = '#0B132B';
    ctx.font = '800 20px "Chakra Petch", sans-serif';
    ctx.fillText('BEST MATCH POSITION', 130, 217);

    // Position Name
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 76px "Noto Sans KR", sans-serif';
    ctx.fillText(pos.nameKr, 112, 316);
    ctx.fillStyle = '#B8FF3B';
    ctx.font = '700 38px "Chakra Petch", sans-serif';
    ctx.fillText(pos.nameEn, 112 + ctx.measureText(pos.nameKr).width + 20, 314);

    // Suitability Big Score
    ctx.textAlign = 'right';
    ctx.fillStyle = '#94A3B8';
    ctx.font = '700 22px "Chakra Petch", sans-serif';
    ctx.fillText('FIT SCORE', W - 116, 224);
    ctx.fillStyle = '#B8FF3B';
    ctx.font = '900 92px "Chakra Petch", sans-serif';
    ctx.fillText(`${latestAnalysis.scores[pos.key]}%`, W - 116, 320);
    ctx.textAlign = 'left';

    // Traits Pills
    let px = 112;
    ctx.font = '700 22px "Noto Sans KR", sans-serif';
    pos.traits.forEach(t => {
      const tw = ctx.measureText(t).width + 34;
      drawRoundedRect(ctx, px, 354, tw, 44, 14);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(t, px + 17, 384);
      px += tw + 12;
    });

    // Short desc
    ctx.fillStyle = '#CBD5E1';
    ctx.font = '500 23px "Noto Sans KR", sans-serif';
    wrapCanvasText(ctx, pos.shortDesc, 112, 434, W - 224, 32, 2);

    // Coach Quote Card
    drawRoundedRect(ctx, 76, 524, W - 152, 198, 24);
    ctx.fillStyle = 'rgba(13, 24, 52, 0.92)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(184, 255, 59, 0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#B8FF3B';
    ctx.font = '800 22px "Noto Sans KR", sans-serif';
    ctx.fillText('코치의 추천 멘트', 112, 568);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '500 24px "Noto Sans KR", sans-serif';
    wrapCanvasText(ctx, `"${latestAnalysis.coachMessage}"`, 112, 608, W - 224, 34, 3);

    // Two Column Section: Suitability Bars (Left) & 6 Stats (Right)
    drawRoundedRect(ctx, 76, 752, 448, 360, 24);
    ctx.fillStyle = 'rgba(21, 34, 70, 0.88)';
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 26px "Noto Sans KR", sans-serif';
    ctx.fillText('포지션별 적합도', 108, 804);

    latestAnalysis.sortedPositions.forEach((pKey, idx) => {
      const p = POSITIONS[pKey];
      const score = latestAnalysis.scores[pKey];
      const y = 856 + idx * 64;
      ctx.fillStyle = idx === 0 ? '#B8FF3B' : '#E2E8F0';
      ctx.font = '800 22px "Noto Sans KR", sans-serif';
      ctx.fillText(`${p.nameKr} (${p.nameEn})`, 108, y);
      ctx.textAlign = 'right';
      ctx.fillText(`${score}%`, 492, y);
      ctx.textAlign = 'left';

      drawRoundedRect(ctx, 108, y + 12, 384, 16, 8);
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.fill();

      drawRoundedRect(ctx, 108, y + 12, Math.max(18, (384 * score) / 100), 16, 8);
      ctx.fillStyle = idx === 0 ? '#B8FF3B' : '#6482BD';
      ctx.fill();
    });

    // Right Column: 6 Play Style Stats
    drawRoundedRect(ctx, 556, 752, 448, 360, 24);
    ctx.fillStyle = 'rgba(21, 34, 70, 0.88)';
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 26px "Noto Sans KR", sans-serif';
    ctx.fillText('플레이 스타일 능력치', 588, 804);

    const statList = [
      ['공격 성향', latestAnalysis.stats.attack],
      ['수비 성향', latestAnalysis.stats.defense],
      ['스피드', latestAnalysis.stats.speed],
      ['체력', latestAnalysis.stats.stamina],
      ['볼 컨트롤', latestAnalysis.stats.control],
      ['경기 판단력', latestAnalysis.stats.iq]
    ];
    statList.forEach(([lbl, val], idx) => {
      const y = 848 + idx * 42;
      ctx.fillStyle = '#CBD5E1';
      ctx.font = '700 20px "Noto Sans KR", sans-serif';
      ctx.fillText(lbl, 588, y);
      ctx.fillStyle = '#B8FF3B';
      ctx.textAlign = 'right';
      ctx.font = '800 22px "Chakra Petch", sans-serif';
      ctx.fillText(String(val), 972, y);
      ctx.textAlign = 'left';

      drawRoundedRect(ctx, 710, y - 14, 210, 12, 6);
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.fill();
      drawRoundedRect(ctx, 710, y - 14, Math.max(12, (210 * val) / 100), 12, 6);
      ctx.fillStyle = '#38BDF8';
      ctx.fill();
    });

    // Strengths & Drills Summary Card
    drawRoundedRect(ctx, 76, 1142, W - 152, 204, 24);
    ctx.fillStyle = 'rgba(21, 34, 70, 0.88)';
    ctx.fill();

    ctx.fillStyle = '#B8FF3B';
    ctx.font = '800 23px "Noto Sans KR", sans-serif';
    ctx.fillText('핵심 강점 TOP 3', 112, 1190);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '600 21px "Noto Sans KR", sans-serif';
    latestAnalysis.strengths.forEach((s, i) => {
      ctx.fillText(`• ${s.title}`, 112, 1230 + i * 36);
    });

    ctx.fillStyle = '#38BDF8';
    ctx.font = '800 23px "Noto Sans KR", sans-serif';
    ctx.fillText('추천 맞춤 훈련', 590, 1190);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '600 21px "Noto Sans KR", sans-serif';
    pos.drills.forEach((d, i) => {
      ctx.fillText(`${i + 1}. ${d.name}`, 590, 1230 + i * 36);
    });

    // Footer Disclaimer
    ctx.fillStyle = '#64748B';
    ctx.font = '500 18px "Noto Sans KR", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('FUTSAL FIT · 자기평가 기반 참고 결과이며 실제 경기 실력을 객관적으로 측정한 점수는 아닙니다.', W / 2, 1396);

    // Trigger PNG Download
    const link = document.createElement('a');
    link.download = `FUTSAL-FIT-${pos.nameEn}-결과.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('결과 카드 이미지(PNG)가 저장되었습니다!');
  }

  /* ===========================================================
     10. SHARE RESULT
  =========================================================== */
  async function shareResult() {
    if (!latestAnalysis) return;
    const pos = POSITIONS[latestAnalysis.bestPosition];
    const score = latestAnalysis.scores[pos.key];
    const shareText = [
      `[FUTSAL FIT 나의 풋살 포지션 테스트 결과]`,
      `⚽ 추천 포지션: ${pos.nameKr} (${pos.nameEn}) · 적합도 ${score}%`,
      `💬 코치 멘트: "${latestAnalysis.coachMessage}"`,
      `📊 포지션별 적합도: 피보 ${latestAnalysis.scores.pivo}% | 아라 ${latestAnalysis.scores.ala}% | 픽소 ${latestAnalysis.scores.fixo}% | 골레이로 ${latestAnalysis.scores.goleiro}%`,
      `🔥 나의 핵심 강점: ${latestAnalysis.strengths.map(s => s.title).join(', ')}`
    ].join('\n');

    if (navigator.share) {
      try {
        await navigator.share({
          title: `FUTSAL FIT — 나는 ${pos.nameKr}(${pos.nameEn})!`,
          text: shareText
        });
        showToast('결과를 공유했습니다!');
        return;
      } catch (err) {
        if (err && err.name === 'AbortError') return;
      }
    }

    // Clipboard fallback (works on http/https and file://)
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareText);
        showToast('결과 텍스트가 클립보드에 복사되었습니다!');
        return;
      }
    } catch (_) {
      // fall through to textarea fallback
    }

    const ta = document.createElement('textarea');
    ta.value = shareText;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast('결과 텍스트가 클립보드에 복사되었습니다!');
    } catch (_) {
      showToast('브라우저에서 복사가 제한되어 이미지 저장을 이용해 주세요.');
    }
    document.body.removeChild(ta);
  }

  /* ===========================================================
     11. RESET & EVENT LISTENERS
  =========================================================== */
  function resetAndStart(goQuiz = true) {
    currentIndex = 0;
    answers = new Array(QUESTIONS.length).fill(null);
    latestAnalysis = null;
    hideQuizAlert();
    if (goQuiz) {
      renderQuestion('forward');
      showView('quiz');
    } else {
      showView('home');
    }
  }

  brandHomeBtn.addEventListener('click', () => {
    showView('home');
  });

  startTestBtn.addEventListener('click', () => {
    resetAndStart(true);
  });

  prevBtn.addEventListener('click', handlePrev);
  nextBtn.addEventListener('click', handleNext);

  alertJumpBtn.addEventListener('click', () => {
    const idx = parseInt(alertJumpBtn.dataset.jumpIndex || '0', 10);
    currentIndex = idx;
    hideQuizAlert();
    renderQuestion('back');
  });

  trainingIntensitySlider.addEventListener('input', (e) => {
    const level = parseInt(e.target.value, 10);
    currentTrainingLevel = level;
    updateSliderVisual(level);
    if (latestAnalysis) {
      renderDrills(POSITIONS[latestAnalysis.bestPosition], level, latestAnalysis.expLevel);
    }
  });

  saveImageBtn.addEventListener('click', downloadResultCard);
  shareBtn.addEventListener('click', shareResult);
  retryBtn.addEventListener('click', () => resetAndStart(true));

  // Keyboard navigation support during quiz
  document.addEventListener('keydown', (e) => {
    if (!views.quiz.classList.contains('active')) return;
    const q = QUESTIONS[currentIndex];
    if (e.key >= '1' && e.key <= String(q.options.length)) {
      const optIdx = parseInt(e.key, 10) - 1;
      const btn = optionsList.querySelectorAll('.option-btn')[optIdx];
      if (btn) btn.click();
    } else if (e.key === 'Enter') {
      if (document.activeElement && document.activeElement.classList.contains('option-btn')) return;
      handleNext();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      handlePrev();
    }
  });
})();
