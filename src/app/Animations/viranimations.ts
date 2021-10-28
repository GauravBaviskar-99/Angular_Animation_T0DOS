import { animate, animateChild, state, group, query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';



export const virtuaDropdownAnimation = trigger('virtuaDropdownAnimation', [
    state('void', style({
        height: '0',
        overflow: 'hidden',
        paddingTop: '0',
        paddingBottom: '0',
        maxHeight: '0'
    })),

    transition('void=>*', [
        query('div', style({ opacity: 0 })),
        animate("400ms ease-in")
    ]),

    transition('*=>void', [
        query('div', style({ opacity: 0 })),
        animate('400ms ease-out')
    ])
])