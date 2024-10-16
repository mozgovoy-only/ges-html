import Component, { ComponentProps } from '@/base/component';

type SectionProjectListOptions = {

}

export default class SectionProjectList extends Component<HTMLElement, SectionProjectListOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
