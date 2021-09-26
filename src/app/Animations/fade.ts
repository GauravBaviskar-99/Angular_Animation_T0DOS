import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export let fade = trigger('fade', [
    state('void', style({ backgroundColor: 'aliceblue', opacity: 0 })),
    transition('void <=> *', [
        animate(2000)
    ])
])


export let shakeLeft = trigger('shakeLeft', [
    transition('void => *', [
        style({
            backgroundColor: 'aliceblue',
            transform: 'translateX(-20px)'
        }),
        animate('0.7s ease-in')
    ]),
    transition(':leave', [
        animate('1s ease-out', keyframes([
            style({
                offset: 0,
                color: 'red',
                transform: "scale(1)",
                opacity: 1,
            }),
            style({
                offset: 0.2,
                transform: "translateY(0px) scale(0.7)",
                opacity: 0.7,
            }),
            style({
                offset: 1,
                color: 'red',
                transform: 'translateY(700px) scale(0.7)',
                opacity: 0.7,
            }),
        ]))
    ])
])




// animate('1s ease-in', keyframes([
//     style(
//         {
//             offset: 0,
//             color: 'green',
//             opacity: 0,
//             transform: 'translate3d(-100%, 100%, 0)'
//         }),

//     style(
//         {
//             color: 'green',
//             offset: 1,
//             opacity: 1,
//             transform: 'translate3d(0, 0, 0)'
//         }),


//     // style({
//     //     offset: 1,
//     //     transform: 'scale(1)',
//     //     opacity: 1
//     // })

// ]))