class YuqueDomain {
  getDomain() {
    const origin = document.location.origin;
    // 简单判断是否为语雀
    if (!origin.includes('yuque')) return null;
    return origin;
  }
}

const yuqueDomain = new YuqueDomain();
export { yuqueDomain };
