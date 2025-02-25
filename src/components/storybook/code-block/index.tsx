type Props = {
  content: string;
};

function CodeBlock({ content }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: content || "" }} />;
}

export default CodeBlock;
