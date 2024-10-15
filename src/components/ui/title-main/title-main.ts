import Component, { ComponentProps } from '@/base/component';

type TitleMainOptions = {

}

export default class TitleMain extends Component<HTMLElement, TitleMainOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
