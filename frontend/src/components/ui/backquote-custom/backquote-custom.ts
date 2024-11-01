import Component, { ComponentProps } from '@/base/component';

type BackquoteCustomOptions = {

}

export default class BackquoteCustom extends Component<HTMLElement, BackquoteCustomOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
