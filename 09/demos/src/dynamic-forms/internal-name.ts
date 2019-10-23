export class InternalName {
    readonly originalName: string;
    readonly value: string;

    constructor(original: string) {
        this.originalName = original;
        this.value = this.makeInternalName(original);
    }

    private makeInternalName(name: string): string {
        return name.replace(/ /g, '');
    }
}
