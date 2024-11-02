import Component, { ComponentProps } from '@/base/component';

type FeedbackOptions = {

}

export default class Feedback extends Component<HTMLElement, FeedbackOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
