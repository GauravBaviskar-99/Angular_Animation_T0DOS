import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from "@angular/animations";

export let fade = trigger('fade', [
    state('void', style({ backgroundColor: 'aliceblue', opacity: 0 })),
    transition('void <=> *', [
        animate(2000)
    ])
])


export let animateTodo = trigger('animateTodo', [
    transition('void => *', [
        style({
            backgroundColor: 'aliceblue',
            transform: 'translateX(-20px)'
        }),
        animate('0.7s ease-in')
    ]),
    transition(':leave', [
        style({
            backgroundColor: 'red'
        }),
        animate(500),
        animate('1s ease-out', keyframes([
            style({
                offset: 0,
                color: 'red',
                zIndex: 5,
                transform: "scale(1)",
                opacity: 1,
            }),
            style({
                offset: 0.2,
                zIndex: 5,
                transform: "translateY(0px) scale(0.7)",
                opacity: 0.7,
            }),
            style({
                offset: 1,
                color: 'red',
                zIndex: 5,
                transform: 'translateY(700px) scale(0.7)',
                opacity: 0.7,
            }),
        ]))
    ])
])
export let bounceOutLeftAnimation = animation(
    animate('0.5s ease-out', keyframes([
        style({
            offset: 0.2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        }),

    ]))
)

export let slide = trigger('slide', [
    transition(':enter', [
        style({
            transform: 'translateX(-20px)'
        }),
        animate(500)
    ]),
    transition(':leave', [
        useAnimation(bounceOutLeftAnimation)
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