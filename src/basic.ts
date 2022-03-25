const basic = {
  multiply: (a: number, b: number) => a * b,
  capitalize: (s: string): string => s.charAt(0).toUpperCase() + s.slice(1),
  humanize: (s: string): string =>
    s
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str: string) => str.toUpperCase()),
};

export default basic;
