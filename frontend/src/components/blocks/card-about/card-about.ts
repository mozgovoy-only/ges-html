import Component, { ComponentProps } from '@/base/component';

type CardAboutOptions = {

}

export default class CardAbout extends Component<HTMLElement, CardAboutOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
