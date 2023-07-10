'use client';

import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './scroll.css';

import CodingTestCard from './codingTestCard';
import AlgorithmCard from './algorithmCard';
import MainCard from './mainCard';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

export function CodingTestCardScroll() {
  // 기존에 있던 코드
  // const [items, setItems] = React.useState(getItems);
  // const [selected, setSelected] = React.useState([]);
  // const [position, setPosition] = React.useState(0);

  // const isItemSelected = (id: string) => !!selected.find((el) => el === id);

  // const handleClick =
  //   (id: any) =>
  //   ({ getItemById, scrollToItem }: any) => {
  //     const itemSelected = isItemSelected(id);

  //     setSelected((currentSelected) =>
  //       itemSelected
  //         ? currentSelected.filter((el) => el !== id)
  //         : currentSelected.concat(id),
  //     );
  //   };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
      <CodingTestCard />
    </ScrollMenu>
  );
}

export function AlgorithmCardScroll() {
  return (
    <>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
        <AlgorithmCard />
      </ScrollMenu>
    </>
  );
}

export function MainScroll() {
  return (
    <>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </ScrollMenu>
    </>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button
      disabled={isFirstItemVisible} // 필요 없는거 같음
      onClick={() => scrollPrev()}
      className="opacity-0 hover:opacity-30"
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        position: 'absolute',
        left: '50px',
        height: '320px',
        width: '50px',
        zIndex: '999',
        backgroundColor: 'gray',
      }}
    >
      ←
    </button>
  );
}

// function RightArrow() {
//   const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

//   return (
//     <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
//       Right
//     </Arrow>

//   );
// }

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className="opacity-0 hover:opacity-30"
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        position: 'absolute',
        right: '50px',
        height: '320px',
        width: '50px',
        zIndex: '999',
        backgroundColor: 'gray',
      }}
    >
      →
    </button>
  );
}

// 기본적으로 들어가있던 카드
function Card({ onClick, selected, title, itemId }: any) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
        border: '1px solid black',
        margin: '4px',
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}

// function Arrow({
//   children,
//   disabled,
//   onClick,
//   className,
// }: {
//   children: React.ReactNode;
//   disabled: boolean;
//   onClick: VoidFunction;
//   className?: String;
// }) {
//   return (
//     <button
//       disabled={disabled}
//       onClick={onClick}
//       className={'arrow' + `-${className}`}
//       style={{
//         cursor: 'pointer',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         right: '1%',
//         opacity: disabled ? '0' : '1',
//         userSelect: 'none',
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// function Arrow({
//   children,
//   disabled,
//   onClick,
//   className,
// }: {
//   children: React.ReactNode;
//   disabled: boolean;
//   onClick: VoidFunction;
//   className?: String;
// }) {
//   return (
//     <button
//       disabled={disabled}
//       onClick={onClick}
//       className="opacity-0 hover:opacity-100"
//       style={{
//         cursor: 'pointer',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         // opacity: disabled ? '0' : '1',
//         userSelect: 'none',
//         position: 'absolute',
//         height: '28%',
//         zIndex: '999',
//       }}
//     >
//       {children}
//     </button>
//   );
// }
