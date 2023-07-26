import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
  --color-color-primary: #27ae60;
	--color-color-secondary: #eb5757;
	--color-grey-4: #333333;
  --color-grey-3: #343a40;
  --color-grey-2: #828282;
	--color-grey-1: #e0e0e0;
  --color-grey-0: #f8f9fa;
  --color-negative: #e60000;
	--color-warning: #ffcd07;
	--color-sucess: #168821;
	--color-information: #155bcb;
  --gradiente: linear-gradient(100deg, #333333 45.64%, #EB5757 60.74%);
    font-size: 62.5%;

    --font-family-default: 'Inter', sans-serif;
    
  --font-weight-1: 800;
  --font-weight-2: 700;
  --font-weight-3: 600;
  --font-weight-4: 500;
  --font-weight-5: 400;
  
  --font-size-1: 2.375rem;
  --font-size-2: 1.375rem;
  --font-size-3: 1rem;
  --font-size-4: 0.875rem;
  --font-size-5: 0.625rem;
  --font-size-6: 0.5rem;
  }

  body, input, button, textarea{
		font-family: var(--font-family-default);
		font-size: 1.6rem;
	}
`;
