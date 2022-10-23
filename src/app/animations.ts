import { keyframes, transition, animate, trigger, style, query, stagger, animateChild, group } from "@angular/animations";
// import {  } from "console";

export const detailEnterAnimation = trigger('detailAnimation', [
  transition(':enter', [

    query('span.h-full, .font-header', style({ opacity: 0 })),
    query(':enter', style({ transform: 'scale(1)' }), { optional: true }),
    group([
      query('span.h-full', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'scaleX(0)', transformOrigin: 'left', offset: 0 }),
          style({ opacity: 1, transform: 'scaleX(1)', transformOrigin: 'left', offset: 0.2 }),
          style({ opacity: 1, transform: 'scaleX(0)', transformOrigin: 'left', offset: 0.8 }),
          style({ opacity: 1, transform: 'scaleX(0)', transformOrigin: 'left', offset: 1 })
        ])
        )]),
      query('.font-header', [
        animate(500, keyframes([
          style({ opacity: 0, offset: 0.9 }),
          style({ opacity: 1, offset: 1 })
        ]))
      ])
    ])
  ])
])

export const listStagger = trigger('listStagger', [
  transition(':enter', [
    query('.animation-container', [
      style({
        opacity: 0
      })
    ]),
    query('.border-bottom, .border-left', [
      style({ opacity: 0 })
    ]),
    group([
      query('.border-bottom', [
        // stagger(20, [
        style({ borderBottom: 'none', transform: 'scaleX(0)', transformOrigin: 'left' }),
        animate('500ms ease-in')

        // ])
      ]),
      query('.border-left', [
        // stagger(50, [
        style({ borderLeft: 'none', transform: 'scaleY(0)', transformOrigin: 'bottom' }),
        animate('500ms ease-in',)

        // ])
      ]),
    ]),
    query('.animation-container', [
      stagger(50, [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate(200)
      ])
    ]),
  ]),
  transition(':leave', [
    // animate(200, style({ transform: 'scale(0)', opacity: 0 }))
    // query('.animation-container', [
    //   style({ opacity: 1, transform: 'scale(1)' })
    // ]),
    // query('.border-bottom, .border-left', [
    //   style({ opacity: 1 })
    // ]),
    // group([
    //   query('.border-bottom', [
    //     // stagger(20, [
    //     style({ transform: 'scaleX(0)', transformOrigin: 'left' }),
    //     animate('2000ms ease-in')

    //     // ])
    //   ]),
    //   query('.border-left', [
    //     // stagger(50, [
    //     style({ transform: 'scaleY(0)', transformOrigin: 'bottom' }),
    //     animate('300ms ease-in',)

    //     // ])
    //   ]),
    // ]),
    query(':leave', [
      stagger(30, [
        animate(300,
          style({ opacity: 0, transform: 'scale(0)' }),
        )
      ])
    ], { limit: 10 }),

  ])
])

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> detailPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0, transform: 'translateX(300px)' })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(100px)', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [

        animate('350ms ease-in', style({ opacity: 1, transform: 'scale(1)' }))
        // query('.animate-img')
        // stagger(50, [
        // ])
        // animate('1400ms ease-in', style({ transform: 'scale(1)' }))
      ], { optional: true }),
      query('@*', animateChild(), { optional: true })
    ])
  ]),


  // transition('* => *', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%'
  //     })
  //   ], { optional: true }),
  //   query(':enter', [
  //     style({ left: '-100%' })
  //   ], { optional: true }),
  //   query(':leave', animateChild(), { optional: true }),
  //   group([
  //     query(':leave', [
  //       animate('3000ms ease-in', style({ left: '100%' }))
  //     ], { optional: true }),
  //     query(':enter', [
  //       animate('2000ms ease-in', style({ left: '0%' }))
  //     ], { optional: true }),
  //     query('@*', animateChild(), { optional: true })
  //   ])
  // ])
])

  // query('span:enter ', [
  //   // set intial step of animation stagger as bug displays element before transition
  //   style({
  //     opacity: 1,
  //     borderBottom: '2px solid black',
  //     transform: 'scaleX(1)',

  //   }),
  //   stagger(100, [

  //     animate('500ms ease-out', keyframes([
  //       style({
  //         opacity: 0,
  //         borderBottom: 'none',
  //         transformOrigin: 'left',
  //         // width: 0,
  //         transform: 'scaleX(0)',
  //         offset: 0
  //       }),
  //       style({
  //         opacity: 1,
  //         borderBottom: '2px solid black',
  //         transform: 'scaleX(1)',
  //         transformOrigin: 'left',
  //         // width: '100%',
  //         offset: 1,
  //       })
  //     ]))

  //   ])
  // ], { optional: true }),

  // export const listStagger = trigger('listStagger', [
  //   transition('* => *', [
  //     query(':leave', [
  //       style({
  //         opacity: 1,
  //         // transform: 'scaleX(1)'
  //       }),
  //       stagger(30, [
  //         animate('300ms ease-in', keyframes([
  //           style({
  //             opacity: 1,
  //             // borderRight: ,
  //             // transform: 'scaleX(.4)',
  //             offset: .4
  //           }),
  //           style({
  //             opacity: 0,
  //             // transform: 'scaleX(0)',
  //             offset: 1
  //           })
  //         ]))
  //       ])
  //     ], { optional: true }),
  //     query('span:enter ', [
  //       // set intial step of animation stagger as bug displays element before transition
  //       style({
  //         opacity: 1,
  //         borderBottom: '2px solid black',
  //         transform: 'scaleX(1)',

  //       }),
  //       stagger(100, [

  //         animate('500ms ease-out', keyframes([
  //           style({
  //             opacity: 0,
  //             borderBottom: 'none',
  //             transformOrigin: 'left',
  //             // width: 0,
  //             transform: 'scaleX(0)',
  //             offset: 0
  //           }),
  //           style({
  //             opacity: 1,
  //             borderBottom: '2px solid black',
  //             transform: 'scaleX(1)',
  //             transformOrigin: 'left',
  //             // width: '100%',
  //             offset: 1,
  //           })
  //         ]))

  //       ])
  //     ], { optional: true }),
  //     query(':enter', [
  //       // style({
  //       //   opacity:1,
  //       //   // transform: trasn/
  //       // }),
  //       stagger(30, [
  //         animate('300ms ease-in', style({
  //           opacity: 1
  //         }))
  //       ])
  //     ])
  //   ])
  // ])






// export const childAnimation = trigger('childAnimation', [
//   transition('* => *', [
//     query()
//   ])
// ])

// export const listStagger = trigger('listStagger', [
//   transition('* => *', [
//     query(':enter', [
//       // set intial step of animation stagger as bug displays element before transition
//       style({
//         opacity: 0,
//         transform: 'translateX(-30%)',
//       }),
//       stagger(100, [

//         animate('500ms ease-out', keyframes([
//           style({
//             opacity: 1,
//             transform: 'translateX(-10%)',
//             offset: .2
//           }),
//           style({
//             opacity: 1,
//             transform: 'translateX(0)',
//             offset: 1
//           })
//         ]))

//       ])
//     ]),
//     query('border-b-2, border-r-2', [
//       animate('300ms', style({
//         transform:'scale(1)'
//       })),
//       animate(300)
//     ])
//   ])

// ])
