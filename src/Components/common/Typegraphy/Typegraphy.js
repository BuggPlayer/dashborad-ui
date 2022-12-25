// import type { ReactElement } from 'react';

// import { classNames } from '../utils/classNames';

// import { TypographyType } from './Typography.interface';

// import type { TypographyProps } from './Typography.interface';

// const TypographyTypeMap = {
//   h1: 'text-2xl font-bold',
//   h2: 'text-lg font-bold',
//   h3: 'text-md font-bold',
//   p: 'text-base',
//   span: 'text-base',
// };
// export const Typography = (props: TypographyProps): ReactElement => {
//   let classes = TypographyTypeMap[props.type];

//   if (props.className) {
//     classes = classNames(classes, props.className);
//   }

//   switch (props.type) {
//     case TypographyType.h1: {
//       return <h1 className={classes}>{props.children}</h1>;
//     }
//     case TypographyType.h2: {
//       return <h2 className={classes}>{props.children}</h2>;
//     }
//     case TypographyType.h3: {
//       return <h3 className={classes}>{props.children}</h3>;
//     }
//     case TypographyType.p: {
//       return <p className={classes}>{props.children}</p>;
//     }
//     // case TypographyType.span:
//     default: {
//       return <span className={classes}>{props.children}</span>;
//     }
//   }
// };
