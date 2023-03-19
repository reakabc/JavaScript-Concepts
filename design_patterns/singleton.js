class CustomLogger {
  static count = 0;
  constructor() {
    if (CustomLogger.instance == null) {
      this.logs = [];
      CustomLogger.instance = this;
    }
    return CustomLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    CustomLogger.count += 1;
    console.log("Custom Logger: ", message);
  }

  static getLogsCount() {
    return CustomLogger.count;
  }
}

const logger = new CustomLogger();

// We can freeze this object as well to prevent further modification
Object.freeze(logger);

logger.log("Test Logging");
logger.log("Test Logging 2");
logger.log(CustomLogger.getLogsCount());
logger.log("Test Logging 2");
logger.log(CustomLogger.getLogsCount());
