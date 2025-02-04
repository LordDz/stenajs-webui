import * as React from "react";
import { ReactNode } from "react";
import { Box, Column, Indent, Row, useBoolean } from "@stenajs-webui/core";
import {
  ActionMenu,
  FlatButton,
  stenaAngleDown,
} from "@stenajs-webui/elements";
import { Popover } from "@stenajs-webui/tooltip";
import { Checkbox, CheckboxProps } from "@stenajs-webui/forms";

export interface CheckboxMenuProps extends CheckboxProps {
  renderMenu: (close: () => void) => ReactNode;
}

const border = `1px solid var(--lhds-color-ui-300)`;

export const CheckboxMenu: React.FC<CheckboxMenuProps> = ({
  renderMenu,
  ...checkboxProps
}) => {
  const [isOpen, open, close] = useBoolean(false);
  return (
    <Popover
      onClickOutside={close}
      arrow={false}
      visible={isOpen}
      disablePadding
      content={
        renderMenu ? (
          <Column>
            <ActionMenu>{renderMenu(close)}</ActionMenu>
          </Column>
        ) : undefined
      }
      placement={"bottom-start"}
      variant={"outlined"}
    >
      <Box display={"inline-block"}>
        <Row
          spacing={0.5}
          indent
          alignItems={"center"}
          border={border}
          borderRadius={"4px"}
        >
          <Checkbox {...checkboxProps} />
          <Indent num={0.5} />
          <FlatButton size={"small"} onClick={open} leftIcon={stenaAngleDown} />
        </Row>
      </Box>
    </Popover>
  );
};
