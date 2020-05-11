import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../features/common/Button";


storiesOf("Button", module).add("with text", () => (
    <Button label={'continue'} />
));