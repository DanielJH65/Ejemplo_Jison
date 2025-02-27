import cors from "cors";

const ACCEPTED_ORIGINS = ["http://localhost:5173"];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("No permitido"));
    },
  });
