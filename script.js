const stories = [
    {
        title: "The Coffee Shop Miracle",
        content: `Sarah rushed into the coffee shop, already 20 minutes late for her job interview. As she fumbled for her wallet, she realized she'd forgotten it at home. Tears welled up in her eyes.
        
        <br><br>An elderly man behind her stepped forward. "I'll get this one," he smiled warmly. "We all need a little help sometimes."
        
        <br><br>Sarah thanked him profusely and rushed to her interview. Three months later, as the newly hired marketing director, she implemented a company policy: free coffee for anyone having a tough day.
        
        <br><br>That elderly man? He never knew his simple act of kindness would touch hundreds of lives through Sarah's initiative.`,
        takeaway: "✨ Key Takeaway: Small acts of kindness create ripples that can change the world, one person at a time.",
        categories: ["kindness", "success"],
        mood: ["happy", "hopeful", "inspired"]
    },
    {
        title: "The Last Dancer",
        content: `Maya had been rejected from 47 dance auditions. At 28, everyone said she was "too old" to start a professional dance career. Her savings were gone, her confidence shattered.
        
        <br><br>On audition #48, she decided it would be her last try. She poured every ounce of her soul into that three-minute routine, dancing not for approval, but for the pure joy of movement.
        
        <br><br>The choreographer stopped her halfway through. Maya's heart sank. But then he smiled: "We've been looking for someone with exactly your passion and authenticity."
        
        <br><br>Today, Maya leads her own dance company, proving that persistence and authenticity triumph over perceived limitations.`,
        takeaway: "🌟 Key Takeaway: Your greatest breakthrough often comes disguised as your final attempt.",
        categories: ["success", "growth", "inspiration"],
        mood: ["motivated", "hopeful", "inspired"]
    },
    {
        title: "The Grocery Store Hero",
        content: `Ten-year-old Marcus noticed Mrs. Chen counting coins at the grocery checkout, her face flushed with embarrassment as she put back items she couldn't afford.
        
        <br><br>Marcus approached with his birthday money – $23 he'd saved for a new video game. "Mrs. Chen, my mom sent this for you," he lied sweetly, pressing the bills into her surprised hands.
        
        <br><br>Mrs. Chen knew the truth but accepted graciously. The next week, she brought Marcus homemade dumplings. Soon, their families became close friends.
        
        <br><br>Years later, Mrs. Chen paid for Marcus's college tuition, saying, "Kindness is the best investment anyone can make."`,
        takeaway: "💝 Key Takeaway: Generosity creates bonds that last a lifetime and returns to us in unexpected ways.",
        categories: ["kindness", "growth"],
        mood: ["happy", "hopeful", "inspired"]
    },
    {
        title: "The Midnight Janitor",
        content: `David worked as a night janitor while studying for his engineering degree. Every night at 2 AM, he'd find Professor Williams still in her lab, working on renewable energy research.
        
        <br><br>Instead of just emptying her trash, David began leaving small notes of encouragement and interesting articles he'd found about her research field.
        
        <br><br>Professor Williams was touched by this anonymous support. When she discovered it was David, she offered him a research assistant position.
        
        <br><br>That partnership led to a breakthrough in solar technology. David is now a leading engineer, but he still leaves encouraging notes for others.`,
        takeaway: "🔬 Key Takeaway: Excellence in small things leads to opportunities in great things.",
        categories: ["success", "kindness", "growth"],
        mood: ["motivated", "inspired", "hopeful"]
    },
    {
        title: "The Silent Artist",
        content: `Emma hadn't spoken since a childhood trauma. Through art therapy, she discovered she could express herself through painting. Her therapist suggested displaying her work publicly.
        
        <br><br>Terrified but determined, Emma agreed to a small gallery showing. She stood silently beside her paintings as visitors admired her vibrant, emotional canvases.
        
        <br><br>A young girl approached Emma's painting of a phoenix rising from ashes. The girl whispered, "This is exactly how I feel." Emma's eyes filled with tears of recognition.
        
        <br><br>That night, Emma spoke her first words in years: "Thank you for seeing me." Today, her art helps trauma survivors worldwide find their voice.`,
        takeaway: "🎨 Key Takeaway: Our deepest wounds often become our greatest gifts to others.",
        categories: ["growth", "inspiration"],
        mood: ["hopeful", "inspired", "calm"]
    },
    {
        title: "The Lunch Money Legacy",
        content: `James, a fourth-grader, noticed his classmate Alex never had lunch money. Instead of just feeling sorry, James started packing an extra sandwich every day.
        
        <br><br>"My mom always packs too much," he'd say casually, offering half his lunch to Alex. This continued for months without fanfare or recognition.
        
        <br><br>When Alex's mother finally learned the truth, she was moved to tears. She started a program at their school to ensure no child went hungry.
        
        <br><br>Twenty years later, Alex became a chef and opened a restaurant with a simple rule: anyone hungry eats for free, no questions asked.`,
        takeaway: "🥪 Key Takeaway: Childhood kindness can seed lifelong missions of compassion.",
        categories: ["kindness", "inspiration", "growth"],
        mood: ["happy", "hopeful", "inspired"]
    },
    {
        title: "The Garden of Second Chances",
        content: `After losing his job, Tom felt worthless. His neighbor, Mrs. Rodriguez, asked if he'd help tend her community garden. "I can't pay much," she said, "but the vegetables feed twelve families."
        
        <br><br>Tom discovered he had a natural gift for gardening. As plants flourished under his care, so did his confidence. The families he fed became his cheerleaders.
        
        <br><br>One day, a local restaurant owner tasted Tom's tomatoes at the farmer's market. "I need a supplier like you," she said, offering him a contract.
        
        <br><br>Tom now owns three community gardens and a successful organic farm. "Sometimes you have to plant yourself where you can grow," he tells visitors.`,
        takeaway: "🌱 Key Takeaway: Growth often begins when we focus on nurturing others instead of ourselves.",
        categories: ["growth", "success", "inspiration"],
        mood: ["calm", "hopeful", "motivated"]
    },
    {
        title: "The Library Angel",
        content: `Elderly Mrs. Patterson spent her retirement volunteering at the local library, reading to children every Tuesday. She noticed shy eight-year-old Zoe always sat in the back, never participating.
        
        <br><br>One day, Mrs. Patterson discovered Zoe couldn't read well and was embarrassed. She began staying after story time to help Zoe privately, making it feel like a special privilege.
        
        <br><br>Month by month, Zoe's confidence grew. She started reading aloud during story time, her voice growing stronger with each book.
        
        <br><br>Today, Zoe is a published author who dedicates every book "To Mrs. P, who taught me that every story matters, especially mine."`,
        takeaway: "📚 Key Takeaway: Patient mentorship can unlock potential that even the learner didn't know existed.",
        categories: ["kindness", "growth", "inspiration"],
        mood: ["calm", "hopeful", "inspired"]
    }
];

let currentStoryIndex = 0;
let isFlipping = false;
let currentFilter = 'all';
let selectedMood = null;
let filteredStories = [...stories];

// Create falling petals
function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 3 + 5) + 's';
    petal.style.animationDelay = Math.random() * 2 + 's';
    document.getElementById('petals').appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 8000);
}

// Generate petals continuously
setInterval(createPetal, 500);

// Smart Filtering Functions
function setFilter(category) {
    currentFilter = category;
    
    // Update active tab
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');
    
    // Filter stories
    if (category === 'all') {
        filteredStories = [...stories];
    } else {
        filteredStories = stories.filter(story => story.categories.includes(category));
    }
    
    updateSmartSuggestion();
}

function selectMood(mood) {
    // Update selected mood
    document.querySelectorAll('.mood-emoji').forEach(emoji => {
        emoji.classList.remove('selected');
    });
    document.querySelector(`[data-mood="${mood}"]`).classList.add('selected');
    
    selectedMood = mood;
    updateSmartSuggestion();
}

function updateSmartSuggestion() {
    const suggestionEl = document.getElementById('smartSuggestion');
    
    if (selectedMood && currentFilter !== 'all') {
        const matchingStories = filteredStories.filter(story => story.mood.includes(selectedMood));
        suggestionEl.innerHTML = `🎯 Found ${matchingStories.length} ${currentFilter} stories perfect for when you're feeling ${getMoodDescription(selectedMood)}!`;
    } else if (selectedMood) {
        const matchingStories = stories.filter(story => story.mood.includes(selectedMood));
        suggestionEl.innerHTML = `😊 Found ${matchingStories.length} stories perfect for your ${getMoodDescription(selectedMood)} mood!`;
    } else if (currentFilter !== 'all') {
        suggestionEl.innerHTML = `📚 Showing ${filteredStories.length} inspiring ${currentFilter} stories just for you!`;
    } else {
        suggestionEl.innerHTML = `💡 Select your mood above to get personalized story recommendations!`;
    }
}

function getMoodDescription(mood) {
    const descriptions = {
        happy: 'joyful and uplifted',
        motivated: 'ready to take action',
        calm: 'peaceful and centered',
        hopeful: 'optimistic about the future',
        inspired: 'creative and energized'
    };
    return descriptions[mood] || mood;
}

function getSmartRecommendation() {
    let recommendedStories = [...stories];
    
    // Apply mood filter first
    if (selectedMood) {
        recommendedStories = recommendedStories.filter(story => story.mood.includes(selectedMood));
    }
    
    // Apply category filter
    if (currentFilter !== 'all') {
        recommendedStories = recommendedStories.filter(story => story.categories.includes(currentFilter));
    }
    
    // If no matches, fall back to all stories
    if (recommendedStories.length === 0) {
        recommendedStories = [...stories];
    }
    
    // Get random story from filtered results
    const randomIndex = Math.floor(Math.random() * recommendedStories.length);
    const recommendedStory = recommendedStories[randomIndex];
    
    // Find the index in the main stories array
    const storyIndex = stories.findIndex(story => story.title === recommendedStory.title);
    
    // Display the story
    displayStory(storyIndex);
    
    // Update suggestion text
    const suggestionEl = document.getElementById('smartSuggestion');
    suggestionEl.innerHTML = `✨ Perfect match! This story was specially picked based on your preferences.`;
}

function displayStory(index) {
    if (isFlipping) return;
    
    isFlipping = true;
    const card = document.getElementById('storyCard');
    card.classList.add('flipping');
    
    setTimeout(() => {
        currentStoryIndex = index;
        const story = stories[currentStoryIndex];
        
        document.getElementById('storyTitle').textContent = story.title;
        document.getElementById('storyContent').innerHTML = story.content;
        document.getElementById('keyTakeaway').innerHTML = story.takeaway;
        
        // Animate progress bar
        const progressBar = document.getElementById('progressBar');
        progressBar.style.width = '100%';
        setTimeout(() => {
            progressBar.style.width = '0%';
        }, 2000);
        
        card.classList.remove('flipping');
        isFlipping = false;
        updateReadingTime();
    }, 300);
}

function shuffleStory() {
    // Get random story different from current
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * stories.length);
    } while (newIndex === currentStoryIndex);
    
    displayStory(newIndex);
}

let focusMode = false;
function toggleReadingMode() {
    focusMode = !focusMode;
    const body = document.body;
    
    if (focusMode) {
        body.style.background = 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)';
        document.querySelector('.btn:last-child').textContent = '🌈 Color Mode';
    } else {
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)';
        document.querySelector('.btn:last-child').textContent = '📖 Focus Mode';
    }
}

const encouragements = [
    "You're amazing! 🌟",
    "Keep shining! ✨",
    "You've got this! 💪",
    "Beautiful soul! 💖",
    "Stay wonderful! 🌸"
];

function showEncouragement() {
    const smiley = document.querySelector('.smiley');
    const feelingText = document.querySelector('.feeling-text');
    
    const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
    feelingText.textContent = randomEncouragement;
    
    smiley.style.transform = 'scale(1.5) rotate(360deg)';
    setTimeout(() => {
        smiley.style.transform = 'scale(1)';
        setTimeout(() => {
            feelingText.textContent = 'Feeling better?';
        }, 2000);
    }, 500);
}

// Dynamic Theme System
let currentTheme = 'default';
let seasonalParticlesInterval = null;

const themeConfig = {
    spring: {
        name: '🌸 Spring',
        particles: 'cherry-blossom',
        particleCount: 8,
        colors: ['#ff9a9e', '#fecfef', '#ffc0cb'],
        mood: 'hopeful'
    },
    summer: {
        name: '☀️ Summer',
        particles: 'sunray',
        particleCount: 12,
        colors: ['#ffecd2', '#fcb69f', '#ff9a9e'],
        mood: 'happy'
    },
    autumn: {
        name: '🍂 Autumn',
        particles: 'leaf',
        particleCount: 10,
        colors: ['#ff7e5f', '#feb47b', '#ff6b6b'],
        mood: 'calm'
    },
    winter: {
        name: '❄️ Winter',
        particles: 'snowflake',
        particleCount: 15,
        colors: ['#a8edea', '#fed6e3', '#d299c2'],
        mood: 'calm'
    },
    default: {
        name: '🌈 Galaxy',
        particles: 'petal',
        particleCount: 10,
        colors: ['#667eea', '#764ba2', '#f093fb'],
        mood: 'inspired'
    }
};

function changeTheme(themeName) {
    // Update active theme button
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-theme="${themeName}"]`).classList.add('active');
    
    // Change body theme class
    document.body.className = '';
    document.body.classList.add(themeName);
    if (focusMode) {
        document.body.classList.add('focus-mode');
    }
    
    currentTheme = themeName;
    
    // Clear existing particles
    clearSeasonalParticles();
    
    // Start new seasonal particles
    startSeasonalParticles(themeName);
    
    // Auto-suggest mood based on theme
    const theme = themeConfig[themeName];
    if (theme.mood && !selectedMood) {
        suggestMoodForTheme(theme.mood);
    }
    
    // Update story card colors subtly
    updateStoryCardTheme(themeName);
}

function clearSeasonalParticles() {
    // Clear existing particles
    const particleContainer = document.getElementById('petals');
    particleContainer.innerHTML = '';
    
    // Clear interval
    if (seasonalParticlesInterval) {
        clearInterval(seasonalParticlesInterval);
        seasonalParticlesInterval = null;
    }
}

function startSeasonalParticles(themeName) {
    const theme = themeConfig[themeName];
    const particleContainer = document.getElementById('petals');
    
    const createParticle = () => {
        const particle = document.createElement('div');
        
        if (theme.particles === 'cherry-blossom') {
            particle.className = 'cherry-blossom';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
        } 
        else if (theme.particles === 'sunray') {
            particle.className = 'sunray';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 50 + '%';
            particle.style.animationDuration = (Math.random() * 4 + 8) + 's';
            particle.style.animationDelay = Math.random() * 3 + 's';
        }
        else if (theme.particles === 'leaf') {
            particle.className = 'leaf';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDuration = (Math.random() * 5 + 12) + 's';
            particle.style.animationDelay = Math.random() * 3 + 's';
        }
        else if (theme.particles === 'snowflake') {
            particle.className = 'snowflake';
            particle.textContent = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDuration = (Math.random() * 6 + 15) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.style.fontSize = (Math.random() * 8 + 12) + 'px';
        }
        else {
            // Default petals
            particle.className = 'petal';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
        }
        
        particleContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 20000);
    };
    
    // Create initial particles
    for (let i = 0; i < theme.particleCount; i++) {
        setTimeout(createParticle, i * 200);
    }
    
    // Continue creating particles
    seasonalParticlesInterval = setInterval(createParticle, 800);
}

function updateStoryCardTheme(themeName) {
    const storyCard = document.getElementById('storyCard');
    const theme = themeConfig[themeName];
    
    // Subtle theme-based accent
    const accentColor = theme.colors[0];
    storyCard.style.borderTop = `4px solid ${accentColor}`;
}

function suggestMoodForTheme(mood) {
    const moodEmoji = document.querySelector(`[data-mood="${mood}"]`);
    if (moodEmoji && !selectedMood) {
        // Gentle visual suggestion
        moodEmoji.style.transform = 'scale(1.2)';
        moodEmoji.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.6)';
        
        setTimeout(() => {
            moodEmoji.style.transform = '';
            moodEmoji.style.boxShadow = '';
        }, 3000);
    }
}

// Auto-detect season based on current date
function getAutoSeason() {
    const month = new Date().getMonth() + 1; // 1-12
    
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';  
    if (month >= 9 && month <= 11) return 'autumn';
    return 'winter';
}

// Enhanced focus mode to work with themes
const originalToggleReadingMode = toggleReadingMode;
toggleReadingMode = function() {
    focusMode = !focusMode;
    const body = document.body;
    
    if (focusMode) {
        body.className = '';
        body.classList.add('focus-mode');
        body.style.background = 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)';
        document.querySelector('.btn:last-child').textContent = '🌈 Color Mode';
        clearSeasonalParticles();
    } else {
        body.classList.remove('focus-mode');
        body.classList.add(currentTheme);
        body.style.background = '';
        document.querySelector('.btn:last-child').textContent = '📖 Focus Mode';
        startSeasonalParticles(currentTheme);
    }
};

// Initialize theme system
function initializeThemes() {
    // Auto-detect season or use default
    const autoSeason = getAutoSeason();
    
    // You can enable auto-season detection by uncommenting the next line:
    // changeTheme(autoSeason);
    
    // For now, start with default theme
    changeTheme('default');
}

// Ambient Sound Player Variables
let currentAudio = null;
let isPlaying = false;
let currentSound = null;
let soundAnimationInterval = null;

// Sound URLs - using nature sounds and ambient audio
const soundUrls = {
    rain: 'https://www.soundjay.com/misc/sounds/rain-01.wav',
    forest: 'https://www.soundjay.com/nature/sounds/forest-with-birds.wav',
    ocean: 'https://www.soundjay.com/nature/sounds/ocean-wave-1.wav',
    piano: 'https://www.soundjay.com/instruments/sounds/piano-loop.wav',
    cafe: 'https://www.soundjay.com/ambient/sounds/cafe-ambience.wav'
};

// Fallback to generated tones if external sounds don't work
const generateAmbientSound = (type) => {
    // Create simple ambient sounds using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const soundGenerators = {
        rain: () => {
            // White noise for rain effect
            const bufferSize = audioContext.sampleRate * 2;
            const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
            const data = buffer.getChannelData(0);
            
            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * 0.1;
            }
            
            const source = audioContext.createBufferSource();
            source.buffer = buffer;
            source.loop = true;
            
            const filter = audioContext.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 800;
            
            source.connect(filter);
            return { source, filter, audioContext };
        },
        
        ocean: () => {
            // Low frequency oscillation for ocean waves
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(0.5, audioContext.currentTime);
            
            const gainNode = audioContext.createGain();
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            
            oscillator.connect(gainNode);
            return { source: oscillator, filter: gainNode, audioContext };
        },
        
        forest: () => {
            // Multiple oscillators for forest ambience
            const oscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            
            oscillator1.type = 'sawtooth';
            oscillator1.frequency.setValueAtTime(200, audioContext.currentTime);
            
            oscillator2.type = 'triangle';
            oscillator2.frequency.setValueAtTime(400, audioContext.currentTime);
            
            const gainNode = audioContext.createGain();
            gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
            
            oscillator1.connect(gainNode);
            oscillator2.connect(gainNode);
            
            return { 
                source: { start: () => { oscillator1.start(); oscillator2.start(); } }, 
                filter: gainNode, 
                audioContext 
            };
        },
        
        piano: () => {
            // Simple piano-like tones
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(261.63, audioContext.currentTime); // C4
            
            const gainNode = audioContext.createGain();
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            
            oscillator.connect(gainNode);
            return { source: oscillator, filter: gainNode, audioContext };
        },
        
        cafe: () => {
            // Brownian noise for café ambience
            const bufferSize = audioContext.sampleRate * 2;
            const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
            const data = buffer.getChannelData(0);
            
            let lastOut = 0;
            for (let i = 0; i < bufferSize; i++) {
                const white = Math.random() * 2 - 1;
                data[i] = (lastOut + (0.02 * white)) / 1.02;
                lastOut = data[i];
                data[i] *= 0.1;
            }
            
            const source = audioContext.createBufferSource();
            source.buffer = buffer;
            source.loop = true;
            
            return { source, filter: audioContext.destination, audioContext };
        }
    };
    
    return soundGenerators[type] ? soundGenerators[type]() : null;
};

// Sound Control Functions
function selectSound(soundType) {
    // Stop current sound
    if (currentAudio) {
        stopCurrentSound();
    }
    
    // Update active sound button
    document.querySelectorAll('.sound-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-sound="${soundType}"]`).classList.add('active');
    
    currentSound = soundType;
    
    // If already playing, start new sound immediately
    if (isPlaying) {
        playSound(soundType);
    }
}

function togglePlayPause() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    
    if (isPlaying) {
        stopCurrentSound();
        playPauseBtn.textContent = '▶️ Play';
        stopSoundAnimation();
    } else {
        if (currentSound) {
            playSound(currentSound);
            playPauseBtn.textContent = '⏸️ Pause';
            startSoundAnimation();
        } else {
            // Default to rain if no sound selected
            selectSound('rain');
            playSound('rain');
            playPauseBtn.textContent = '⏸️ Pause';
            startSoundAnimation();
        }
    }
    
    isPlaying = !isPlaying;
}

function playSound(soundType) {
    try {
        // Try to create and play generated ambient sound
        const soundData = generateAmbientSound(soundType);
        if (soundData) {
            currentAudio = soundData;
            soundData.source.connect(soundData.filter);
            soundData.filter.connect(soundData.audioContext.destination);
            
            // Set initial volume
            const volume = document.getElementById('volumeSlider').value / 100;
            if (soundData.filter.gain) {
                soundData.filter.gain.setValueAtTime(volume * 0.1, soundData.audioContext.currentTime);
            }
            
            soundData.source.start();
        }
    } catch (error) {
        console.log('Audio context not available, using visual feedback only');
        currentAudio = { type: 'visual' }; // Fallback for visual-only experience
    }
}

function stopCurrentSound() {
    if (currentAudio) {
        try {
            if (currentAudio.source && currentAudio.source.stop) {
                currentAudio.source.stop();
            }
            if (currentAudio.audioContext) {
                currentAudio.audioContext.close();
            }
        } catch (error) {
            // Silent error handling
        }
        currentAudio = null;
    }
}

function adjustVolume() {
    const volume = document.getElementById('volumeSlider').value / 100;
    
    if (currentAudio && currentAudio.filter && currentAudio.filter.gain) {
        currentAudio.filter.gain.setValueAtTime(volume * 0.1, currentAudio.audioContext.currentTime);
    }
}

// Sound Visualizer Animation
function startSoundAnimation() {
    const bars = document.querySelectorAll('.sound-bar');
    
    soundAnimationInterval = setInterval(() => {
        bars.forEach(bar => {
            const height = Math.random() * 15 + 5;
            bar.style.height = height + 'px';
        });
    }, 200);
}

function stopSoundAnimation() {
    if (soundAnimationInterval) {
        clearInterval(soundAnimationInterval);
        soundAnimationInterval = null;
    }
    
    // Reset bars to minimum height
    document.querySelectorAll('.sound-bar').forEach(bar => {
        bar.style.height = '3px';
    });
}

// Auto-suggest sounds based on story mood
function suggestSoundForMood(mood) {
    const soundSuggestions = {
        calm: 'ocean',
        motivated: 'forest',
        happy: 'cafe',
        hopeful: 'piano',
        inspired: 'rain'
    };
    
    const suggestedSound = soundSuggestions[mood];
    if (suggestedSound && !isPlaying) {
        // Subtle visual hint
        const soundBtn = document.querySelector(`[data-sound="${suggestedSound}"]`);
        if (soundBtn) {
            soundBtn.style.boxShadow = '0 0 15px rgba(79, 172, 254, 0.6)';
            setTimeout(() => {
                soundBtn.style.boxShadow = '';
            }, 2000);
        }
    }
}

// Enhanced mood selection with sound suggestions
const originalSelectMood = selectMood;
selectMood = function(mood) {
    originalSelectMood(mood);
    suggestSoundForMood(mood);
};

// Clean up audio when page unloads
window.addEventListener('beforeunload', () => {
    stopCurrentSound();
    stopSoundAnimation();
});

// Auto-update reading time
function updateReadingTime() {
    const content = document.getElementById('storyContent').textContent;
    const wordCount = content.split(' ').length;
    const readingTime = Math.ceil(wordCount / 200); // Average reading speed
    document.getElementById('readingTime').textContent = readingTime + ' min';
}