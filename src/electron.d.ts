declare const electron: {
  chatgptApi: { getCompletion: (prompt: string) => Promise<string> };
};
