enum LogLevel {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
  DEBUG = "DEBUG"
}

function formatMessage(level: LogLevel, message: string): string {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level}] ${message}`;
}

export const logger = {
  info(message: string) {
    console.log(formatMessage(LogLevel.INFO, message));
  },

  warn(message: string) {
    console.warn(formatMessage(LogLevel.WARN, message));
  },

  error(message: string, error?: unknown) {
    console.error(formatMessage(LogLevel.ERROR, message));

    if (error instanceof Error) {
      console.error(error.stack);
    }
  },

  debug(message: string) {
    if (process.env.NODE_ENV !== "production") {
      console.debug(formatMessage(LogLevel.DEBUG, message));
    }
  }
};
