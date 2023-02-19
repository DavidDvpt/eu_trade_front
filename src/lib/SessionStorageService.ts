const SessionStorageService = (function () {
  function _setToken(index: string): void {
    try {
      if (index) {
        sessionStorage.setItem("token", index);
      }
    } catch (error) {
      sessionStorage.setItem("token", "");
    }
  }

  function _getToken(): string {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        return "directory";
      }

      return token;
    } catch (err) {
      return "";
    }
  }

  return {
    setDashboardTab: _setToken,
    getDashboardTab: _getToken,
  };
})();

export default SessionStorageService;
