import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Markdown({ content }) {
  if (!content) return null;

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: (props) => (
          <h1
            {...props}
            className="mt-10 first:mt-0 text-2xl md:text-3xl font-bold tracking-tight text-text-primary"
          />
        ),
        h2: (props) => (
          <h2
            {...props}
            className="mt-10 text-xl md:text-2xl font-semibold tracking-tight text-text-primary"
          />
        ),
        h3: (props) => (
          <h3
            {...props}
            className="mt-8 text-lg md:text-xl font-semibold text-text-primary"
          />
        ),
        p: (props) => (
          <p {...props} className="text-text-secondary leading-relaxed" />
        ),
        a: ({ className, ...props }) => (
          <a
            {...props}
            className={`text-accent hover:underline underline-offset-4 ${className ?? ""}`}
            target={props.href?.startsWith("#") ? undefined : "_blank"}
            rel={props.href?.startsWith("#") ? undefined : "noreferrer"}
          />
        ),
        ul: (props) => (
          <ul {...props} className="mt-4 space-y-2 list-disc list-inside" />
        ),
        ol: (props) => (
          <ol
            {...props}
            className="mt-4 space-y-2 list-decimal list-inside"
          />
        ),
        li: (props) => <li {...props} className="text-text-secondary" />,
        blockquote: (props) => (
          <blockquote
            {...props}
            className="mt-6 border-l-2 border-accent/40 pl-4 italic text-text-secondary"
          />
        ),
        hr: (props) => <hr {...props} className="my-10 border-border" />,
        code: ({ inline, className, children, ...props }) => {
          if (inline) {
            return (
              <code
                {...props}
                className={`px-1.5 py-0.5 rounded bg-secondary border border-border text-text-primary ${className ?? ""}`}
              >
                {children}
              </code>
            );
          }

          return (
            <code
              {...props}
              className={`block whitespace-pre overflow-x-auto p-4 rounded-xl bg-secondary border border-border text-text-primary ${className ?? ""}`}
            >
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
