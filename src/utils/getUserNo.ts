const getUserNo = () => {
  if (typeof window !== undefined) {
    const userNo = Number(localStorage.getItem('userNo'));
    return userNo;
  }
};

export const userNo = getUserNo() as number;
