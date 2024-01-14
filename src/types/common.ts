export const queryKeys = {
  user: ["user"] as const,
  userById: (userId: string) => ["todos", userId] as const,
};
