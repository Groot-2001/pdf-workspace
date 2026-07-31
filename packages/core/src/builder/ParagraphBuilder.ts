import { Paragraph } from "../elements/Paragraph";
import { Text } from "../elements/Text";

export class ParagraphBuilder {
    public constructor(
        private readonly paragraph: Paragraph,
    ) {}

    public text(value: string): this {
        this.paragraph.addText(new Text(value));

        return this;
    }
}