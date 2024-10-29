import Component, { ComponentProps } from '@/base/component';

type CardStageOptions = {

}

export default class CardStage extends Component<HTMLElement, CardStageOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
