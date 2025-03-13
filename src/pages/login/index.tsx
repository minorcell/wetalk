import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import BgWebM from "../../assets/videos/bg-video.webm";
import BgVideo from "../../assets/videos/bg-video.mp4";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useUserStore } from "../../store";

export type FormData = {
  email: string;
  password: string;
  repassword?: string;
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useUserStore((state) => state.login);

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRePassword, setShowRePassword] = useState<boolean>(false);
  const [formDate, setFormDate] = useState<FormData>({
    email: "",
    password: "",
    repassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const success = await login(formDate.email, formDate.password);
      if (success) {
        interface LocationState {
          from?: {
            pathname: string;
          };
        }
        const from =
          (location.state as LocationState)?.from?.pathname || "/chat";
        navigate(from);
      }
    } else {
      if (formDate.password !== formDate.repassword) {
        alert("两次输入的密码不一致");
        return;
      }
      alert("注册功能暂未实现");
    }
  };

  return (
    <>
      <title>{`${isLogin ? "登陆" : "注册"} | WeTalk`}</title>
      <div className="w-screen h-screen flex justify-center items-center">
        <video
          autoPlay
          loop
          muted
          className="fixed top-0 left-0 w-screen h-screen object-cover"
        >
          <source src={BgWebM} type="video/webm" />
          <source src={BgVideo} type="video/mp4" />
        </video>
        {/* 标题和标语 */}
        <div className="w-2/5 h-[3/5] flex flex-col items-start justify-between gap-y-16 text-gray-100 z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-design font-bold text-9xl"
          >
            WeTalk在线聊天室
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-3xl"
          >
            简单、即时、加密，用的更放心。
          </motion.p>
        </div>

        {/* 登陆/注册表单 */}
        <div className="w-2/5 h-full flex flex-col items-center justify-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`duration-700 backdrop-blur-2xl w-3/5 min-h-2/5 rounded-2xl px-8 py-16 flex flex-col gap-8 shadow-2xl`}
          >
            {/* 切换按钮 */}
            <div className="relative w-full flex justify-center mb-2">
              <div className="relative bg-white/5 border border-blue-700 rounded-full p-1 w-64 flex justify-between">
                {/* 滑动背景 */}
                <motion.div
                  className="absolute top-1 left-1 bottom-1 w-[calc(50%-2px)] bg-blue-700 rounded-full shadow-md"
                  animate={{ x: isLogin ? 0 : "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 40 }}
                />
                {/* 登录按钮 */}
                <motion.button
                  className={`relative z-10 py-2 px-6 rounded-full font-medium text-sm w-1/2 transition-colors duration-300 ${
                    isLogin ? "text-white" : "text-gray-400"
                  }`}
                  onClick={() => setIsLogin(true)}
                  whileTap={{ scale: 0.95 }}
                >
                  登录
                </motion.button>
                {/* 注册按钮 */}
                <motion.button
                  className={`relative z-10 py-2 px-6 rounded-full font-medium text-sm w-1/2 transition-colors duration-300 ${
                    !isLogin ? "text-white" : "text-gray-400"
                  }`}
                  onClick={() => setIsLogin(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  注册
                </motion.button>
              </div>
            </div>

            {/* 表单 */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 font-bold"
              onSubmit={handleSubmit}
            >
              <motion.div className="relative">
                <div className="relative w-full">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-700 w-5 h-5 z-10" />
                  <input
                    type="email"
                    placeholder="在此输入您的电子邮件"
                    className={`bg-white input input-bordered w-full text-blue-700 focus:border-blue-700 transition-all duration-300 placeholder:text-gray-500 pl-10`}
                    value={formDate.email}
                    onChange={(e) =>
                      setFormDate({ ...formDate, email: e.target.value })
                    }
                  />
                </div>
              </motion.div>
              <motion.div className="relative">
                <div className="relative w-full">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-700 w-5 h-5 z-10" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="在此输入您的密码"
                    className={`bg-white input input-bordered w-full text-blue-700  focus:border-blue-700 transition-all duration-300 placeholder:text-gray-500 pl-10`}
                    value={formDate.password}
                    onChange={(e) =>
                      setFormDate({ ...formDate, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-700 hover:text-blue-700 transition-colors duration-300"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </motion.div>
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="relative w-full">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-700 w-5 h-5 z-10" />
                    <input
                      type={showRePassword ? "text" : "password"}
                      placeholder="请再次输入您的密码"
                      className={`bg-white input input-bordered w-full text-blue-700  focus:border-blue-700 transition-all duration-300 placeholder:text-gray-500 pl-10`}
                      value={formDate.repassword}
                      onChange={(e) =>
                        setFormDate({ ...formDate, repassword: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowRePassword(!showRePassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-700 hover:text-blue-700 transition-colors duration-300"
                    >
                      {showRePassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-rounded bg-blue-700 text-white w-full mt-4 shadow-lg border-none hover:shadow-blue-700/50 transition-all duration-300"
              >
                {isLogin ? "登录" : "注册"}{" "}
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Login;
