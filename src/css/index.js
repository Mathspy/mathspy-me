import { injectGlobal } from "emotion";

injectGlobal`
	html, body, #___gatsby {
		height: 100%;
	}

  body {
    margin: 0;
  }
`;
