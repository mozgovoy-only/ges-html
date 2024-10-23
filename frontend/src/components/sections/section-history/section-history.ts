import Component, { ComponentProps } from '@/base/component';

type SectionHistoryOptions = {

}

export default class SectionHistory extends Component<HTMLElement, SectionHistoryOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
