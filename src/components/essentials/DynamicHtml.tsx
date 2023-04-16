function DynamicHTML({ text }: any) {
  return <span dangerouslySetInnerHTML={{ __html: text }} />;
}

export default DynamicHTML;
