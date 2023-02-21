import "styled-components";

type ColorTokens = Partial<typeof colors>;
type FontWeightTokens = Partial<typeof fontWeight>;

declare module "styled-components" {
   export interface DefaultTheme {
   }
}
