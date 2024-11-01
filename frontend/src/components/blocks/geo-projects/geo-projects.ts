import Component, { ComponentProps } from '@/base/component';

type GeoProjectsOptions = {

}

export default class GeoProjects extends Component<HTMLElement, GeoProjectsOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
