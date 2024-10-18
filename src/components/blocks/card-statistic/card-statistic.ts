import Component, { ComponentProps } from '@/base/component';

type CardStatisticOptions = {

}

export default class CardStatistic extends Component<HTMLElement, CardStatisticOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
