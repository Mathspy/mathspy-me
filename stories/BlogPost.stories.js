import React from "react";

import { storiesOf } from "@storybook/react";
import { withViewport } from "@storybook/addon-viewport";

import BlogPost from "../src/templates/BlogPost/BlogPost.js";

storiesOf("BlogPost", module)
  .addDecorator(withViewport())
  .add(
    "Simple paragraph",
    () => <BlogPost html={simpleParagraph} title="Test" />,
    {
      viewport: "smalldesktop",
    }
  )
  .add(
    "Simple paragraph (iphone 5)",
    () => <BlogPost html={simpleParagraph} title="Test" />,
    {
      viewport: "iphone5",
    }
  )
  .add("lists", () => <BlogPost html={lists} title="Test" />, {
    viewport: "smalldesktop",
  })
  .add("lists (iphone 5)", () => <BlogPost html={lists} title="Test" />, {
    viewport: "iphone5",
  })
  .add("headings", () => <BlogPost html={headings} title="Test" />, {
    viewport: "smalldesktop",
  })
  .add("headings (iphone 5)", () => <BlogPost html={headings} title="Test" />, {
    viewport: "iphone5",
  })
  .add("links", () => <BlogPost html={links} title="Test" />, {
    viewport: "smalldesktop",
  })
  .add("links (iphone 5)", () => <BlogPost html={links} title="Test" />, {
    viewport: "iphone5",
  })
  .add("codeBlock", () => <BlogPost html={codeBlock} title="Test" />, {
    viewport: "smalldesktop",
  })
  .add(
    "codeBlock (iphone 5)",
    () => <BlogPost html={codeBlock} title="Test" />,
    {
      viewport: "iphone5",
    }
  );

const simpleParagraph = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus tellus eros, sed feugiat nunc malesuada nec. Aliquam sit amet tincidunt ex. Praesent eleifend tempor magna ut laoreet. Fusce non turpis sed nisi ornare varius eget non enim. Sed dapibus venenatis lacinia. Quisque diam ligula, eleifend non condimentum vel, laoreet ac turpis. Ut facilisis, tellus id posuere gravida, purus orci efficitur metus, non eleifend magna ipsum vel diam. Nulla iaculis neque in est vehicula eleifend. Suspendisse potenti. Cras fermentum dignissim ex. Morbi viverra tortor eget ante sodales fermentum. Cras ac maximus eros, non mollis mauris. Aenean et semper magna. In non condimentum orci.</p>

  <p>Aliquam erat volutpat. Nullam commodo viverra ipsum at accumsan. Duis ut vestibulum nibh. Cras hendrerit ipsum et sem ornare faucibus. Pellentesque vestibulum fringilla arcu, sed porta ligula dictum sit amet. Etiam tincidunt bibendum lobortis. In at elit sit amet nulla tincidunt mattis. Aliquam id commodo eros. Donec dui odio, aliquam condimentum fermentum condimentum, molestie et quam. Ut mollis dolor lacus, nec porta nisl tincidunt et. Quisque ut mollis nisl, et posuere mi. Nunc nec placerat lacus, viverra iaculis magna. Proin malesuada justo erat, et consequat nulla luctus quis. Vestibulum nibh libero, sagittis at efficitur id, porttitor id elit. Aenean justo est, consectetur id accumsan quis, vehicula vel nulla.</p>
`;

const lists = `
  <ul>
    <li>Praesent porta ante at tortor porttitor semper.</li>
    <ul>
      <li>Vestibulum sit amet mi eu dolor pulvinar fringilla quis eget nulla.</li>
      <li>Aenean pretium lectus nec hendrerit pretium.</li>
    </ul>
      <li>Proin sit amet ante placerat, mattis mi a, tempor felis.</li>
      <li>Aliquam volutpat libero eu nibh consequat, ut vestibulum eros elementum.</li>
    <ul>
      <li>Cras sit amet mi elementum, tincidunt diam ac, condimentum ex.</li>
      <li>Pellentesque convallis velit id eros vehicula, vitae ornare ex cursus.</li>
      <li>Ut imperdiet neque sed tellus mollis mollis.</li>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Aliquam tristique dolor eu elit vehicula elementum.</li>
      </ul>
      <li>Nunc dictum ipsum vel lectus dignissim congue.</li>
      <li>Vestibulum viverra magna id efficitur pellentesque.</li>
      <li>Fusce faucibus ante eget massa vulputate, nec dictum nunc ultrices.</li>
    </ul>
  </ul>
`;

const headings = `
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
`;

const links = `
  <p>
    <a>Hello!</a>
    <br />
    <br />
    <a>Very very very very very very very very very long link even has more than one line</a>
  </p>
`;

const codeBlock = `
  <pre class="  prism-jsx"><code class="  prism-jsx"><span class="token keyword">class</span> <span class="token class-name">Clock</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>date<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> date <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, world!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">It is </span><span class="token punctuation">{</span>date<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
`;
