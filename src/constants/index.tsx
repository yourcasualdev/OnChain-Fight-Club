import { CreateFight, JoinFight, TrainFighter, Withdraw } from "../containers";

export const TAB_LIST = [
    {
        title: 'Create Fight',
        component: <CreateFight />
    },
    {
        title: 'Join Fight',
        component: <JoinFight />,
    },
    {
        title: 'Train Fighter',
        component: <TrainFighter />,
    },
    {
        title: 'Withdraw',
        component: <Withdraw />,
    },
]

export const FIGHTS = [
    {
        fighter: "0x1234567890",
        attack: 10,
        defense: 10,
        speed: 10,
    },
    {
        fighter: "0xc12e3f4567",
        attack: 20,
        defense: 22,
        speed: 10,
    },
    {
        fighter: "0xeda23e12k2",
        attack: 30,
        defense: 10,
        speed: 10,
    },
    {
        fighter: "0x12314e12e3",
        attack: 40,
        defense: 10,
        speed: 10,
    },
];