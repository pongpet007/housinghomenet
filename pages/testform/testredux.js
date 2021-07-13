import React from "react";

const testredux = () => {
  return <div></div>;
};

export default testredux;

// import { useEffect } from "react";
// import * as types from "../../redux/types";
// import {
//   fetbanner1,
//   fetbanner2,
//   fetbanner3,
// } from "../../redux/actions/banner.action";
// import { useSelector, useDispatch } from "react-redux";

// const testredux = () => {
//   const bannerList = useSelector((state) => state.banner.bannerList);

//   const dispatch = useDispatch();

//   console.log(fetbanner3);

//   const b1 = () => {
//     dispatch(fetbanner1());
//   };
//   const b2 = () => {
//     dispatch(fetbanner2());
//   };

//   useEffect(() => {
//     dispatch(fetbanner1());
//   }, []);

//   return (
//     <div>
//       {JSON.stringify(bannerList)}
//       <div onClick={b1.bind(this)}>Banner1</div>
//       <div onClick={b2.bind(this)}>Banner2</div>
//       <div
//         onClick={() => {
//           dispatch(fetbanner3());
//         }}
//       >
//         Banner3
//       </div>
//       <div
//         onClick={() => {
//           dispatch({ type: types.GET_BANNER, payload: [10, 20, 30] });
//         }}
//       >
//         Banner 4
//       </div>
//     </div>
//   );
// };

// export default testredux;
