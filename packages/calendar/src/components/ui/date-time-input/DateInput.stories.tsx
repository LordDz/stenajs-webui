import { Store, withState } from "@dump247/storybook-state";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { addMonths } from "date-fns";
import * as React from "react";
import { Inline } from "@stenajs-webui/core";
import { DateInput } from "./DateInput";

interface DateInputState {
  value?: Date;
}

storiesOf("calendar/input/DateInput", module)
  .addDecorator(withInfo())
  .add(
    "standard",
    withState<DateInputState>({
      value: undefined
    })(({ store }: { store: Store<DateInputState> }) => (
      <Inline>
        <DateInput
          value={store.state.value}
          onChange={value => store.set({ value })}
        />
      </Inline>
    ))
  )
  .add("empty", () => (
    <Inline>
      <DateInput value={undefined} />
    </Inline>
  ))
  .add("with preselected value", () => (
    <Inline>
      <DateInput value={addMonths(new Date(), 2)} />
    </Inline>
  ));
