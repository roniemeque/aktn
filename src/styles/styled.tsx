import styled, { CreateStyled } from "@emotion/styled";
import { Theme } from "./theme";

// this allows for type inference while coding theme
export default styled as CreateStyled<Theme>;
