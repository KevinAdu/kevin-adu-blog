import * as React from "react";
import Giscus from "@giscus/react";

const id = "inject-comments";

const Comments = (): React.JSX.Element => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id={id}>
      {mounted ? (
        <Giscus
          id={id}
          repo="KevinAdu/kevin-adu-blog"
          repoId="MDEwOlJlcG9zaXRvcnk0ODIzNzU1Ng"
          category="General"
          categoryId="DIC_kwDOAuAL9M4CZt-K"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          lang="en"
          loading="lazy"
        />
      ) : null}
    </div>
  );
};

export default Comments;