# TEMI로 시작하는 대학 AI·로봇 실습 교육 제안 (웹 제안서)

아이비테크㈜ · 오름㈜ — 정적 HTML/CSS/JS 스크롤형 제안서 (빌드 도구 없음, Pretendard CDN 사용).

## 구조
```
index.html            # 섹션 마크업
assets/css/style.css  # 디자인 시스템(#222A6A 딥 인디고) · 반응형
assets/js/main.js     # 스크롤 리빌 · 모바일 메뉴 · 현재 섹션 표시
assets/img/           # 웹용 이미지(webp)
assets/img/chars/     # 캐릭터
vercel.json           # 배포 설정(Vercel / 정적 호스팅)
```

## 미리보기
```bash
python -m http.server 8000   # http://localhost:8000
```

## 참고
- 문의는 이메일·전화 안내만 제공합니다(발송 폼/백엔드 없음).
- 도서관 사진은 `assets/img/library.webp` 파일을 교체하면 반영됩니다(권장 가로 1000px 이상).
- CSS/JS 수정 시 `index.html`의 `?v=` 값을 올려 캐시를 갱신하세요.
