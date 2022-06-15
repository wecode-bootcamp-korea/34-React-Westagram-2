import React from 'react';

const FooterBox = () => {
  return (
    <footer class="footerBox">
      <div class="footerInfoLink">
        {FOOTER_LIST.map(list => {
          return (
            <>
              <a href="/">{list.listName}</a>
              <span>{list.dot}</span>
            </>
          );
        })}
      </div>
      <span>&copy; 2022 WESTARAM</span>
    </footer>
  );
};

const FOOTER_LIST = [
  { id: 1, listName: '소개', dot: '·' },
  { id: 2, listName: '도움말', dot: '·' },
  { id: 3, listName: '홍보 센터', dot: '·' },
  { id: 4, listName: 'API', dot: '·' },
  { id: 5, listName: '채용 정보', dot: '·' },
  { id: 6, listName: '개인정보처리방침', dot: '·' },
  { id: 7, listName: '약관', dot: '·' },
  { id: 8, listName: '위치', dot: '·' },
  { id: 9, listName: '언어', dot: '' },
];

export default FooterBox;
