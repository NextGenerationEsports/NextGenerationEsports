import { motion } from "framer-motion";
import { Hexagon, Terminal, Cpu } from "lucide-react";

export default function Nimbus() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24 relative overflow-hidden text-[#e0e0e0]">
      {/* Matrix / Cyberpunk Background Effects */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2d1b4e_0%,transparent_50%)] opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <Hexagon className="w-24 h-24 mx-auto mb-8 text-[#9d4edd] drop-shadow-[0_0_25px_rgba(157,78,221,0.6)] animate-pulse" style={{ animationDuration: '4s' }} />
          <h1 className="font-display font-bold text-6xl md:text-8xl tracking-widest uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#a0a0a0]">
            Project <br/> Nimbus
          </h1>
          <p className="text-xl md:text-2xl font-mono text-[#8a8a8a] max-w-2xl mx-auto">
            SYSTEM.INITIALIZING // FAN.HUB.ONLINE // PROTOCOL.ACTIVE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/50 border border-[#333] p-8 rounded-none relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#9d4edd] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Terminal className="text-[#9d4edd] mb-6 w-8 h-8" />
            <h3 className="font-mono text-xl mb-4 text-white">DIGITAL.IDENTITY</h3>
            <p className="text-[#8a8a8a] font-mono text-sm leading-relaxed">
              Connect your accounts to access exclusive NG drops, behind-the-scenes content, and voting rights for community events.
            </p>
            <button className="mt-8 font-mono text-sm border border-[#555] px-6 py-2 text-[#aaa] hover:text-white hover:border-[#9d4edd] hover:bg-[#9d4edd]/10 transition-all uppercase tracking-widest w-full">
              Authenticate
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/50 border border-[#333] p-8 rounded-none relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#9d4edd] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Cpu className="text-[#9d4edd] mb-6 w-8 h-8" />
            <h3 className="font-mono text-xl mb-4 text-white">REWARDS.MATRIX</h3>
            <p className="text-[#8a8a8a] font-mono text-sm leading-relaxed">
              Watch matches. Earn tokens. Unlock physical and digital gear. The more you support, the higher your tier.
            </p>
            <button className="mt-8 font-mono text-sm border border-[#555] px-6 py-2 text-[#aaa] hover:text-white hover:border-[#9d4edd] hover:bg-[#9d4edd]/10 transition-all uppercase tracking-widest w-full">
              View Status
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
