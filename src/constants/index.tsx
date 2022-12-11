import { CreateFight, JoinFight, TrainFighter, Withdraw } from "../containers";

export const tablist = [
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