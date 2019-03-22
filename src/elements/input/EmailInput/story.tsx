import React from "react";
import { storiesOf } from "@storybook/react";

import EmailInput from ".";

storiesOf("EmailInput", module).add("default", () => <EmailInput onChange={() => console.log('onChange')} />);
