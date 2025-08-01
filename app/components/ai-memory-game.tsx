"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, RotateCcw, Play, Trophy, Target } from "lucide-react"

interface GameState {
  sequence: number[]
  playerSequence: number[]
  isPlaying: boolean
  isShowingSequence: boolean
  currentStep: number
  score: number
  level: number
  gameOver: boolean
  highScore: number
}

const COLORS = [
  { bg: "bg-blue-500", hover: "hover:bg-blue-400", glow: "shadow-blue-500/50", icon: Brain },
  { bg: "bg-green-500", hover: "hover:bg-green-400", glow: "shadow-green-500/50", icon: Zap },
  { bg: "bg-purple-500", hover: "hover:bg-purple-400", glow: "shadow-purple-500/50", icon: Target },
  { bg: "bg-red-500", hover: "hover:bg-red-400", glow: "shadow-red-500/50", icon: Trophy },
]

export default function AIMemoryGame() {
  const [gameState, setGameState] = useState<GameState>({
    sequence: [],
    playerSequence: [],
    isPlaying: false,
    isShowingSequence: false,
    currentStep: 0,
    score: 0,
    level: 1,
    gameOver: false,
    highScore: 0,
  })

  const [activeButton, setActiveButton] = useState<number | null>(null)
  const [message, setMessage] = useState("Click Start to begin the AI Pattern Challenge!")

  // Load high score from localStorage
  useEffect(() => {
    const savedHighScore = localStorage.getItem("ai-memory-game-high-score")
    if (savedHighScore) {
      setGameState((prev) => ({ ...prev, highScore: Number.parseInt(savedHighScore) }))
    }
  }, [])

  // Save high score to localStorage
  useEffect(() => {
    if (gameState.score > gameState.highScore) {
      localStorage.setItem("ai-memory-game-high-score", gameState.score.toString())
      setGameState((prev) => ({ ...prev, highScore: gameState.score }))
    }
  }, [gameState.score, gameState.highScore])

  const generateNextSequence = useCallback(() => {
    const nextNumber = Math.floor(Math.random() * 4)
    return [...gameState.sequence, nextNumber]
  }, [gameState.sequence])

  const startGame = () => {
    const newSequence = [Math.floor(Math.random() * 4)]
    setGameState({
      ...gameState,
      sequence: newSequence,
      playerSequence: [],
      isPlaying: true,
      isShowingSequence: true,
      currentStep: 0,
      score: 0,
      level: 1,
      gameOver: false,
    })
    setMessage("Watch the pattern...")
    showSequence(newSequence)
  }

  const showSequence = async (sequence: number[]) => {
    setGameState((prev) => ({ ...prev, isShowingSequence: true }))

    for (let i = 0; i < sequence.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600))
      setActiveButton(sequence[i])
      await new Promise((resolve) => setTimeout(resolve, 400))
      setActiveButton(null)
    }

    setGameState((prev) => ({ ...prev, isShowingSequence: false }))
    setMessage("Now repeat the pattern!")
  }

  const handleButtonClick = (buttonIndex: number) => {
    if (!gameState.isPlaying || gameState.isShowingSequence || gameState.gameOver) return

    const newPlayerSequence = [...gameState.playerSequence, buttonIndex]
    const currentSequenceIndex = gameState.playerSequence.length

    setActiveButton(buttonIndex)
    setTimeout(() => setActiveButton(null), 200)

    if (buttonIndex === gameState.sequence[currentSequenceIndex]) {
      // Correct button pressed
      if (newPlayerSequence.length === gameState.sequence.length) {
        // Sequence completed successfully
        const newScore = gameState.score + gameState.level * 10
        const newLevel = gameState.level + 1
        const nextSequence = generateNextSequence()

        setGameState((prev) => ({
          ...prev,
          playerSequence: [],
          sequence: nextSequence,
          score: newScore,
          level: newLevel,
          isShowingSequence: true,
        }))

        setMessage(`Great! Level ${newLevel} - Score: ${newScore}`)

        setTimeout(() => {
          showSequence(nextSequence)
        }, 1000)
      } else {
        // Continue with current sequence
        setGameState((prev) => ({ ...prev, playerSequence: newPlayerSequence }))
      }
    } else {
      // Wrong button pressed - game over
      setGameState((prev) => ({
        ...prev,
        gameOver: true,
        isPlaying: false,
        playerSequence: newPlayerSequence,
      }))
      setMessage(`Game Over! Final Score: ${gameState.score}`)
    }
  }

  const resetGame = () => {
    setGameState({
      sequence: [],
      playerSequence: [],
      isPlaying: false,
      isShowingSequence: false,
      currentStep: 0,
      score: 0,
      level: 1,
      gameOver: false,
      highScore: gameState.highScore,
    })
    setMessage("Click Start to begin the AI Pattern Challenge!")
    setActiveButton(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="bg-gray-800/50 border-gray-700 max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white mb-4">AI Pattern Memory Challenge</CardTitle>

          {/* Game Stats */}
          <div className="flex justify-center gap-6 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{gameState.score}</div>
              <div className="text-sm text-gray-400">Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{gameState.level}</div>
              <div className="text-sm text-gray-400">Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{gameState.highScore}</div>
              <div className="text-sm text-gray-400">High Score</div>
            </div>
          </div>

          {/* Game Message */}
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-300 mb-6"
          >
            {message}
          </motion.div>
        </CardHeader>

        <CardContent>
          {/* Game Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm mx-auto">
            {COLORS.map((color, index) => {
              const IconComponent = color.icon
              const isActive = activeButton === index
              const isDisabled = gameState.isShowingSequence || gameState.gameOver || !gameState.isPlaying

              return (
                <motion.button
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  disabled={isDisabled}
                  className={`
                    relative h-24 w-24 rounded-xl transition-all duration-200 transform
                    ${color.bg} ${color.hover}
                    ${isActive ? `scale-95 shadow-lg ${color.glow}` : "scale-100"}
                    ${isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:scale-105"}
                    flex items-center justify-center
                  `}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: isActive ? 0.95 : 1,
                    boxShadow: isActive
                      ? `0 0 20px ${color.glow.split("/")[0].replace("shadow-", "")}`
                      : "0 0 0px transparent",
                  }}
                >
                  <IconComponent className="h-8 w-8 text-white" />

                  {/* Pulse effect when active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        exit={{ scale: 1, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`absolute inset-0 rounded-xl ${color.bg} pointer-events-none`}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              )
            })}
          </div>

          {/* Game Controls */}
          <div className="flex justify-center gap-4">
            {!gameState.isPlaying ? (
              <Button onClick={startGame} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                <Play className="mr-2 h-5 w-5" />
                {gameState.gameOver ? "Play Again" : "Start Game"}
              </Button>
            ) : (
              <Button
                onClick={resetGame}
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 px-6 py-3 bg-transparent"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Reset
              </Button>
            )}
          </div>

          {/* Game Instructions */}
          <div className="mt-8 p-4 bg-gray-700/30 rounded-lg">
            <h4 className="text-white font-semibold mb-2">How to Play:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Watch the AI generate a pattern sequence</li>
              <li>• Repeat the pattern by clicking the buttons in order</li>
              <li>• Each level adds one more step to the sequence</li>
              <li>• Score points based on your current level</li>
              <li>• Challenge yourself to beat your high score!</li>
            </ul>
          </div>

          {/* Achievement Badges */}
          {gameState.score > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {gameState.score >= 50 && (
                <Badge className="bg-blue-900/30 text-blue-300 border-blue-700/50">Memory Master</Badge>
              )}
              {gameState.level >= 5 && (
                <Badge className="bg-green-900/30 text-green-300 border-green-700/50">Pattern Pro</Badge>
              )}
              {gameState.score >= 100 && (
                <Badge className="bg-purple-900/30 text-purple-300 border-purple-700/50">AI Champion</Badge>
              )}
              {gameState.score >= 200 && (
                <Badge className="bg-yellow-900/30 text-yellow-300 border-yellow-700/50">Legendary</Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
