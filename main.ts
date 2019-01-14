/**
 * Well known colors for a NeoPixel strip
 */
enum BitColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}

// Images from file microbitconstimage.cpp https://github.com/bbcmicrobit/micropython

enum ColorIcon {
    //% block="ChristmasTree"
    //% jres=coloricons.tree
    ChristmasTree = 0,
    //% block="heart"
    //% jres=icons.heart
    Heart,
    //% block="small heart"
    //% jres=icons.smallheart
    SmallHeart,
    //% block="yes"
    //% jres=icons.yes
    Yes,
    //% block="no"
    //% jres=icons.no
    No,
    //% block="happy"
    //% jres=icons.happy
    Happy,
    //% block="sad"
    //% jres=icons.sad
    Sad,
    //% block="confused"
    //% jres=icons.confused
    Confused,
    //% block="angry"
    //% jres=icons.angry
    Angry,
    //% block="asleep"
    //% jres=icons.asleep
    Asleep,
    //% block="surprised"
    //% jres=icons.surprised
    Surprised,
    //% block="silly"
    //% jres=icons.silly
    Silly,
    //% block="fabulous"
    //% jres=icons.fabulous
    Fabulous,
    //% block="meh"
    //% jres=icons.meh
    Meh,
    //% block="t-shirt"
    //% jres=icons.tshirt
    TShirt,
    //% block="roller skate"
    //% jres=icons.rollerskate
    Rollerskate,
    //% block="duck"
    //% jres=icons.duck
    Duck,
    //% block="house"
    //% jres=icons.house
    House,
    //% block="tortoise"
    //% jres=icons.tortoise
    Tortoise,
    //% block="butterfly"
    //% jres=icons.butterfly
    Butterfly,
    //% block="stick figure"
    //% jres=icons.stickfigure
    StickFigure,
    //% block="ghost"
    //% jres=icons.ghost
    Ghost,
    //% block="sword"
    //% jres=icons.sword
    Sword,
    //% block="giraffe"
    //% jres=icons.giraffe
    Giraffe,
    //% block="skull"
    //% jres=icons.skull
    Skull,
    //% block="umbrella"
    //% jres=icons.umbrella
    Umbrella,
    //% block="snake"
    //% jres=icons.snake
    Snake,
    //% block="rabbit"
    //% jres=icons.rabbit
    Rabbit,
    //% block="cow"
    //% jres=icons.cow
    Cow,
    //% block="quarter note"
    //% jres=icons.quarternote
    QuarterNote,
    //% block="eigth note"
    //% jres=icons.eigthnote
    EigthNote,
    //% block="pitchfork"
    //% jres=icons.pitchfork
    Pitchfork,
    //% block="target"
    //% jres=icons.target
    Target,
    //% block="triangle"
    //% jres=icons.triangle
    Triangle,
    //% block="left triangle"
    //% jres=icons.lefttriangle
    LeftTriangle,
    //% block="chess board"
    //% jres=icons.chessboard
    Chessboard,
    //% block="diamond"
    //% jres=icons.diamond
    Diamond,
    //% block="small diamond"
    //% jres=icons.smalldiamond
    SmallDiamond,
    //% block="square"
    //% jres=icons.square
    Square,
    //% block="small square"
    //% jres=icons.smallsquare
    SmallSquare,
    //% block="scissors"
    //% jres=icons.scissors
    Scissors,
    //% block="fill full"
    //% jres=coloricons.full
    FillFull,
    //% block="fill circle"
    //% jres=coloricons.fillCircle
    FillCircle,
    //% block="circle"
    //% jres=coloricons.circle
    Circle,
    //% block="up"
    //% jres=coloricons.up
    Up,
    //% block="down"
    //% jres=coloricons.down
    Down,
    //% block="left"
    //% jres=coloricons.left
    Left,
    //% block="right"
    //% jres=coloricons.right
    Right
}

/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum BitColorMode {
    //% block="RGB (GRB format)"
    RGB = 0,
    //% block="RGB+W"
    RGBW = 1,
    //% block="RGB (RGB format)"
    RGB_RGB = 2
}

/**
 * Functions to operate NeoPixel strips.
 */
//% weight=5 color=#2699BF icon="\uf110"
namespace colorbit {
    let FONTS = [
        [0x0,0x0],       //32: space
        [0x4210,0x400],  //33: !
        [0x5280,0x0],    //34: "
        [0x57d5,0xf500], //35: #
        [0x765d,0x3700], //36: $
        [0xcc88,0x9980], //37: %
        [0x6499,0x2680], //38: &
        [0x4200,0x0],    //39: '
        [0x2210,0x8200], //40: (
        [0x4108,0x4400], //41: )
        [0x288,0xa000],  //42: *
        [0x11c,0x4000],  //43: +
        [0x0,0x4400],    //44: ,
        [0x1c,0x0],      //45: -
        [0x0,0x8000],    //46: .
        [0x888,0x8800],  //47: /
        [0x64a5,0x2600], //48: 0
        [0x2308,0x4700], //49: 1
        [0xe099,0xf00],  //50: 2
        [0xf089,0x2600], //51: 3
        [0x32a5,0xf100], //52: 4
        [0xfc3c,0x1f00], //53: 5
        [0x111d,0x1700], //54: 6
        [0xf888,0x8800], //55: 7
        [0x745d,0x1700], //56: 8
        [0x745c,0x4400], //57: 9
        [0x200,0x8000],  //58: :
        [0x100,0x4400],  //59: ;
        [0x1110,0x4100], //60: <
        [0x380,0xe000],  //61: =
        [0x4104,0x4400], //62: >
        [0x744c,0x200],  //63: ?
        [0x746b,0x3600], //64: @
        [0x64bd,0x2900], //65: A
        [0xe4b9,0x2e00], //66: B
        [0x7421,0x700],  //67: C
        [0xe4a5,0x2e00], //68: D
        [0xf439,0xf00],  //69: E
        [0xf439,0x800],  //70: F
        [0x7427,0x1700], //71: G
        [0x94bd,0x2900], //72: H
        [0xe210,0x8e00], //73: I
        [0xf885,0x2600], //74: J
        [0x9531,0x4900], //75: K
        [0x8421,0xf00],  //76: L
        [0x8eeb,0x1880], //77: M
        [0x8e6b,0x3880], //78: N
        [0x64a5,0x2600], //79: O
        [0xe4b9,0x800],  //80: P
        [0x64a4,0xc300], //81: Q
        [0xe4b9,0x2880], //82: R
        [0x7418,0x2e00], //83: S
        [0xf908,0x4200], //84: T
        [0x94a5,0x2600], //85: U
        [0x8c62,0xa200], //86: V
        [0x8c6b,0xb880], //87: W
        [0x9499,0x2900], //88: X
        [0x8a88,0x4200], //89: Y
        [0xf111,0xf00],  //90: Z
        [0x7210,0x8700], //91: [
        [0x8208,0x2080], //92: \
        [0x7084,0x2700], //93: ]
        [0x2280,0x0],    //94: ^
        [0x0,0xf80],     //95: _
        [0x4100,0x0],    //96: `
        [0x3a5,0x2780],  //97: a
        [0x8439,0x2e00], //98: b
        [0x3a1,0x700],   //99: c
        [0x109d,0x2700], //100: d
        [0x64b9,0x700],  //101: e
        [0x3238,0x8400], //102: f
        [0x749c,0x2600], //103: g
        [0x8439,0x2900], //104: h
        [0x4010,0x8400], //105: i
        [0x1004,0x2600], //106: j
        [0x8531,0x4900], //107: k
        [0x4210,0x8300], //108: l
        [0x6eb,0x1880],  //109: m
        [0x725,0x2900],  //110: n
        [0x325,0x2600],  //111: o
        [0x725,0xc800],  //112: p
        [0x3a4,0xe100],  //113: q
        [0x5b1,0x800],   //114: r
        [0x190,0x4c00],  //115: s
        [0x423c,0x8380], //116: t
        [0x4a5,0x2780],  //117: u
        [0x462,0xa200],  //118: v
        [0x463,0x5d80],  //119: w
        [0x498,0xc900],  //120: x
        [0x454,0x4c00],  //121: y
        [0x788,0x8f00],  //122: z
        [0x3118,0x4300], //123: {
        [0x4210,0x8400], //124: |
        [0xc218,0x8c00], //125: }
        [0x18,0x3000]    //126: ~
    ];
    
    /**
     * A NeoPixel strip
     */
    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: BitColorMode;
        _matrixWidth: number; // number of leds in a matrix - if any
        ismulticolor: boolean;
        lastcolor: number;

        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b). 
         * @param rgb RGB color of the LED
         */
        //% blockId="colorbit_set_strip_color" block="%colorbit_51bit|show color %rgb=colorbit_colors" 
        //% weight=85 blockGap=8
        //% parts="colorbit"
        showColor(rgb: number) {
            rgb = rgb >> 0;
            this.setAllRGB(rgb);
            this.show();
        }
        
        nextNum(): number {
            if(this.lastcolor==BitColors.Red)
                this.lastcolor=BitColors.Orange;
            else if(this.lastcolor==BitColors.Orange)
                this.lastcolor=BitColors.Yellow;
            else if(this.lastcolor==BitColors.Yellow)
                this.lastcolor=BitColors.Green;
            else if(this.lastcolor==BitColors.Green)
                this.lastcolor=BitColors.Blue;
            else if(this.lastcolor==BitColors.Blue)
                this.lastcolor=BitColors.Indigo;
            else if(this.lastcolor==BitColors.Indigo)
                this.lastcolor=BitColors.Violet;
            else if(this.lastcolor==BitColors.Violet)
                this.lastcolor=BitColors.Purple;
            else if(this.lastcolor==BitColors.Purple)
                this.lastcolor=BitColors.White;
            else if(this.lastcolor==BitColors.White)
                this.lastcolor=BitColors.Red;
            return this.lastcolor;
        }
        
        /**
         * Set multiple color. 
         * @param yes is multiple color for each light?
         */
        //% blockId="colorbit_set_multi_color" block="%colorbit_51bit|Set each light with multiple color: %yes" 
        //% weight=12 blockGap=8
        //% parts="colorbit"
        setMultiColor(yes: boolean) {
            this.ismulticolor=yes;
        }

        fn_HextoDec(hex_num: string): number {
            let dec_num = 0;
            let hex_arr = "0123456789abcdef";
            for (let index = 0; index <= hex_num.length - 1; index++) {
                let char = hex_num.charAt(hex_num.length - 1 - index);
                for (let index2 = 0; index2 <= 15; index2++) {
                    if (char.compare(hex_arr.charAt(index2)) == 0) {
                        dec_num = dec_num + index2 * Math.pow(16, index);
                    }
                }
            }
            return dec_num;
        }
        
        /**
         * Show ColorBit Icon with a given color (range 0-255 for r, g, b). 
         * @param input LED ColorIcon
         * @param rgb RGB color of the LED
         */
        //% blockId="colorbit_51bit_show_color_icon" block="%colorbit_51bit|show ColorBit Icon %myicon|with %rgb=colorbit_colors" 
        //% blockGap=8
        //% weight=100
        //% parts="colorbit"
        //% myicon.fieldEditor="imagedropdown"
        //% myicon.fieldOptions.columns="5"
        //% myicon.fieldOptions.width="380"
        //% myicon.fieldOptions.maxRows=5
        showColorIcon(myicon: ColorIcon, rgb: number): void {
            let str: string = "";
            if(myicon==0) str="51bitpasswd:0x23be,0x4200";     //ChristmasTree
            else if(myicon==1) str="51bitpasswd:0x57fe,0xe200";//Heart
            else if(myicon==2) str="51bitpasswd:0x029c,0x4000";//SmallHeart
            else if(myicon==3) str="51bitpasswd:0x0045,0x4400";//Yes
            else if(myicon==4) str="51bitpasswd:0x8a88,0xa880";//No
            else if(myicon==5) str="51bitpasswd:0x0281,0x1700";//Happy
            else if(myicon==6) str="51bitpasswd:0x0280,0xe880";//Sad
            else if(myicon==7) str="51bitpasswd:0x0280,0xaa80";//Confused
            else if(myicon==8) str="51bitpasswd:0x8a81,0xfa80";//Angry
            else if(myicon==9) str="51bitpasswd:0x06c0,0xe000";//Asleep
            else if(myicon==10) str="51bitpasswd:0x5008,0xa200";//Surprised
            else if(myicon==11) str="51bitpasswd:0x883e,0x3180";//Silly
            else if(myicon==12) str="51bitpasswd:0xfec0,0xa700";//Fabulous
            else if(myicon==13) str="51bitpasswd:0xd804,0x4400";//Meh
            else if(myicon==14) str="51bitpasswd:0xdfdc,0xe700";//TShirt
            else if(myicon==15) str="51bitpasswd:0x18ff,0xf500";//Rollerskate
            else if(myicon==16) str="51bitpasswd:0x671e,0xe000";//Duck
            else if(myicon==17) str="51bitpasswd:0x23be,0xe500";//House
            else if(myicon==18) str="51bitpasswd:0x03be,0xa000";//Tortoise
            else if(myicon==19) str="51bitpasswd:0x03be,0xa000";//Butterfly
            else if(myicon==20) str="51bitpasswd:0x27c8,0xa880";//StickFigure
            else if(myicon==21) str="51bitpasswd:0x757f,0xfa80";//Ghost
            else if(myicon==22) str="51bitpasswd:0x2108,0xe200";//Sword
            else if(myicon==23) str="51bitpasswd:0xc210,0xe500";//Giraffe
            else if(myicon==24) str="51bitpasswd:0x757e,0xe700";//Skull
            else if(myicon==25) str="51bitpasswd:0x77c9,0x4e00";//Umbrella
            else if(myicon==26) str="51bitpasswd:0xc6d4,0xe000";//Snake
            else if(myicon==27) str="51bitpasswd:0xa53d,0xaf00";//Rabbit
            else if(myicon==28) str="51bitpasswd:0x8c7e,0xe200";//Cow
            else if(myicon==29) str="51bitpasswd:0x2109,0xce00";//QuarterNote
            else if(myicon==30) str="51bitpasswd:0x218b,0xce00";//EigthNote
            else if(myicon==31) str="51bitpasswd:0xad7e,0x4200";//Pitchfork
            else if(myicon==32) str="51bitpasswd:0x23b6,0xe200";//Target
            else if(myicon==33) str="51bitpasswd:0x0115,0xf000";//Triangle
            else if(myicon==34) str="51bitpasswd:0x8629,0x2f80";//LeftTriangle
            else if(myicon==35) str="51bitpasswd:0x5555,0x5500";//Chessboard
            else if(myicon==36) str="51bitpasswd:0x22a2,0xa200";//Diamond
            else if(myicon==37) str="51bitpasswd:0x0114,0x4000";//SmallDiamond
            else if(myicon==38) str="51bitpasswd:0xfc63,0x1f80";//Square
            else if(myicon==39) str="51bitpasswd:0x0394,0xe000";//SmallSquare
            else if(myicon==40) str="51bitpasswd:0xce89,0xac80";//Scissors
            else if(myicon==41) str="51bitpasswd:0xffff,0xff80";//FillFull
            else if(myicon==42) str="51bitpasswd:0x77ff,0xf700";//FillCircle
            else if(myicon==43) str="51bitpasswd:0x7463,0x1700";//Circle
            else if(myicon==44) str="51bitpasswd:0x23aa,0x4200";//Up
            else if(myicon==45) str="51bitpasswd:0x212a,0xe200";//Down
            else if(myicon==46) str="51bitpasswd:0x223e,0x8200";//Left
            else if(myicon==47) str="51bitpasswd:0x20be,0x2200";//Right
            this.showStringColor(str,rgb);
        }
    
        /**
         * Show ColorBit string with a given color (range 0-255 for r, g, b). 
         * @param input LED string showing
         * @param rgb RGB color of the LED
         */
        //% blockId="colorbit_51bit_show_string_color" block="%colorbit_51bit|show ColorBit string %input|with %rgb=colorbit_colors" 
        //% blockGap=8
        //% weight=100
        //% parts="colorbit"
        showStringColor(input: string, rgb: number): void {
            if(input.indexOf("51bitpasswd:",0)===0) 
            {
                //ChristmasTree: "51bitpasswd:0x23be:0x4200"
                let pixeloffset1=this.fn_HextoDec(input.substr(12, 6));
                let pixeloffset2=this.fn_HextoDec(input.substr(19, 6));
                for (let i = 0; i < 16; ++i) {
                    const index=15-i;
                    const a=pixeloffset1 >> index;
                    if((a & 1)==0) 
                        this.setPixelRGB(i >> 0, 0);
                    else if(this.ismulticolor)
                        this.setPixelRGB(i >> 0, this.nextNum() >> 0);
                    else
                        this.setPixelRGB(i >> 0, rgb >> 0);
                }
                for (let i = 16; i < 25; ++i) {
                    const index=31-i;
                    const a=pixeloffset2 >> index;
                    if((a & 1)==0)
                        this.setPixelRGB(i >> 0, 0);
                    else if(this.ismulticolor)
                        this.setPixelRGB(i >> 0, this.nextNum() >> 0);
                    else 
                        this.setPixelRGB(i >> 0, rgb >> 0);
                }
                this.show();
                return;
            }
            for (let chindex = 0; chindex < input.length; chindex++) {
                let ch: number = input.charCodeAt(chindex)-32;
                let pixeloffset1=FONTS[ch][0];
                let pixeloffset2=FONTS[ch][1];
                for (let i = 0; i < 16; ++i) {
                    const index=15-i;
                    const a=pixeloffset1 >> index;
                    if((a & 1)==0)
                    {
                        this.setPixelRGB(i >> 0, 0);
                    }
                    else if(this.ismulticolor)
                    {
                        this.setPixelRGB(i >> 0, this.nextNum() >> 0);
                    }
                    else
                    {
                        this.setPixelRGB(i >> 0, rgb >> 0);
                    }
                }
                for (let i = 16; i < 25; ++i) {
                    const index=31-i;
                    const a=pixeloffset2 >> index;
                    if((a & 1)==0)
                    {
                        this.setPixelRGB(i >> 0, 0);
                    }
                    else if(this.ismulticolor)
                    {
                        this.setPixelRGB(i >> 0, this.nextNum() >> 0);
                    }
                    else
                    {
                        this.setPixelRGB(i >> 0, rgb >> 0);
                    }
                }
                this.show();
                basic.pause(1000);
            }
        }
        
        /**
         * Show ColorBit Scroll string with a given color (range 0-255 for r, g, b). 
         * @param input LED string showing
         * @param rgb RGB color of the LED
         */
        //% blockId="colorbit_51bit_show_scrollstring_color" block="%colorbit_51bit|show ColorBit scroll string %input|with %rgb=colorbit_colors" 
        //% blockGap=8
        //% weight=99
        //% parts="colorbit"
        showScrollStringColor(input: string, rgb: number): void {
            if (input == '') return;
            input = ' '+ input + ' ';
            for (let chindex = 0; chindex < input.length-1; chindex++) {
                let ch: number = input.charCodeAt(chindex)-32;
                let ch2: number = input.charCodeAt(chindex+1)-32;
                let pixeloffset1=FONTS[ch][0];
                let pixeloffset2=FONTS[ch][1]; 
                let pixeloffset3=FONTS[ch2][0];
                let pixeloffset4=FONTS[ch2][1];         
                let a: number[] = [0, 0, 0, 0, 0];
                let b: number[] = [0, 0, 0, 0, 0];
                //I port this from stc51 8bit CPU, so I need to add 0xffff for 32bit ARM CPU here, might use 32bit in the future for pxt.
                a = [pixeloffset1 >> 11, (0xffff & (pixeloffset1 << 5)) >> 11, (0xffff & (pixeloffset1 << 10)) >> 11, (((0xffff & (pixeloffset1 << 15)) >> 11) | (pixeloffset2 >> 12)), (0xffff & (pixeloffset2 << 4)) >> 11];
                b = [pixeloffset3 >> 11, (0xffff & (pixeloffset3 << 5)) >> 11, (0xffff & (pixeloffset3 << 10)) >> 11, (((0xffff & (pixeloffset3 << 15)) >> 11) | (pixeloffset4 >> 12)), (0xffff & (pixeloffset4 << 4)) >> 11];
                let c: number[] = [0, 0, 0, 0, 0];
                for (let j = 0; j < 5; j++) {
                    for (let k = 0; k < 5; k++)
                        c[k] = (a[k] << j) | ((b[k] >> (5 - j)))
                    
                    //display fonts
                    let i = 0;
                    for (let row = 0; row < 5; row++)
                    {
                        for (let yiweiindex = 0; yiweiindex < 5; yiweiindex++)
                        {
                            const index=4-yiweiindex;
                            const currentrowbit=c[row] >> index;
                            if((currentrowbit & 1)==0)
                            {
                                this.setPixelRGB(i >> 0, 0);
                            }
                            else if(this.ismulticolor)
                            {
                                this.setPixelRGB(i >> 0, this.nextNum() >> 0);
                            }
                            else
                            {
                                this.setPixelRGB(i >> 0, rgb >> 0);
                            }
                            i++;
                        }
                    }
                    this.show();
                    basic.pause(200);
                }
            }
        }
        
         /**
         * Show ColorBit number with a given color (range 0-255 for r, g, b). 
         * @param input LED number showing
         * @param rgb RGB color of the LED
         */
        //% blockId="colorbit_51bit_show_int_color" block="%colorbit_51bit|show ColorBit number %input|with %rgb=colorbit_colors" 
        //% blockGap=8
        //% weight=100
        //% parts="colorbit"
        showIntColor(input: number, rgb: number): void {
            let a: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0];
            let indexl=0;
            if(input==0)
            {
                this.showStringColor("0", rgb);
                return;
            }
            while(input>=1)
            {
                a[indexl++] = input%10;
                input=Math.trunc(input/10);
            }
            
            //reverse each bit
            while(--indexl>=0) 
            {
                let y=a[indexl];
                if((y>=0) && (y<=9)) this.showStringColor(''+y, rgb);
            }
        }
        
        /**
         * Show ColorBit Scroll int with a given color (range 0-255 for r, g, b). 
         * @param input LED int showing
         * @param rgb RGB color of the LED
         */
        //% blockId="colorbit_51bit_show_scrollint_color" block="%colorbit_51bit|show ColorBit scroll int %input|with %rgb=colorbit_colors" 
        //% blockGap=8
        //% weight=99
        //% parts="colorbit"
        showScrollIntColor(input: number, rgb: number): void {
            let a: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0];
            let str: string = "";
            let indexl=0;
            if(input==0)
            {
                this.showStringColor("0", rgb);
                return;
            }
            while(input>=1)
            {
                a[indexl++] = input%10;
                input=Math.trunc(input/10);
            }
            
            //reverse each bit
            while(--indexl>=0) 
            {
                let y=a[indexl];
                if((y>=0) && (y<=9)) str = str+ y;
            }
            this.showScrollStringColor(str, rgb);
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b) in ColorBit
         * @param x horizontal position
         * @param y horizontal position
         * @param rgb RGB color of the LED
         */
        //% blockId="colorbit_draw_colorbit" block="%colorbit_51bit|draw ColorBit at x %x|y %y|to %rgb=colorbit_colors" 
        //% weight=20
        //% parts="colorbit"
        drawColorBit(x: number, y: number, rgb: number) {
            if (this._matrixWidth <= 0) return; // not a matrix, ignore
            x = x >> 0;
            y = y >> 0;
            rgb = rgb >> 0;
            const cols = Math.idiv(this._length, 5);
            if (x < 0 || x >= 5 || y < 0 || y >= cols) return;
            let i = x + y * 5;
            this.setPixelColor(i, rgb);
            this.show();
        }
        
        /**
         * Shows a rainbow pattern on all LEDs. 
         * @param startHue the start hue value for the rainbow, eg: 1
         * @param endHue the end hue value for the rainbow, eg: 360
         */
        //% blockId="colorbit_set_strip_rainbow" block="%colorbit_51bit|show rainbow from %startHue|to %endHue" 
        //% weight=85 blockGap=8
        //% parts="colorbit"
        //% advanced=true
        showRainbow(startHue: number = 1, endHue: number = 360) {
            if (this._length <= 0) return;

            startHue = startHue >> 0;
            endHue = endHue >> 0;
            const saturation = 100;
            const luminance = 50;
            const steps = this._length;
            const direction = HueInterpolationDirection.Clockwise;

            //hue
            const h1 = startHue;
            const h2 = endHue;
            const hDistCW = ((h2 + 360) - h1) % 360;
            const hStepCW = Math.idiv((hDistCW * 100), steps);
            const hDistCCW = ((h1 + 360) - h2) % 360;
            const hStepCCW = Math.idiv(-(hDistCCW * 100), steps);
            let hStep: number;
            if (direction === HueInterpolationDirection.Clockwise) {
                hStep = hStepCW;
            } else if (direction === HueInterpolationDirection.CounterClockwise) {
                hStep = hStepCCW;
            } else {
                hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
            }
            const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

            //sat
            const s1 = saturation;
            const s2 = saturation;
            const sDist = s2 - s1;
            const sStep = Math.idiv(sDist, steps);
            const s1_100 = s1 * 100;

            //lum
            const l1 = luminance;
            const l2 = luminance;
            const lDist = l2 - l1;
            const lStep = Math.idiv(lDist, steps);
            const l1_100 = l1 * 100

            //interpolate
            if (steps === 1) {
                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep))
            } else {
                this.setPixelColor(0, hsl(startHue, saturation, luminance));
                for (let i = 1; i < steps - 1; i++) {
                    const h = Math.idiv((h1_100 + i * hStep), 100) + 360;
                    const s = Math.idiv((s1_100 + i * sStep), 100);
                    const l = Math.idiv((l1_100 + i * lStep), 100);
                    this.setPixelColor(i, hsl(h, s, l));
                }
                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));
            }
            this.show();
        }

        /**
         * Displays a vertical bar graph based on the `value` and `high` value.
         * If `high` is 0, the chart gets adjusted automatically.
         * @param value current value to plot
         * @param high maximum value, eg: 255
         */
        //% weight=84
        //% blockId=colorbit_show_bar_graph block="%colorbit_51bit|show bar graph of %value|up to %high" 
        //% icon="\uf080"
        //% parts="colorbit" advanced=true
        showBarGraph(value: number, high: number): void {
            if (high <= 0) {
                this.clear();
                this.setPixelColor(0, BitColors.Yellow);
                this.show();
                return;
            }

            value = Math.abs(value);
            const n = this._length;
            const n1 = n - 1;
            let v = Math.idiv((value * n), high);
            if (v == 0) {
                this.setPixelColor(0, 0x666600);
                for (let i = 1; i < n; ++i)
                    this.setPixelColor(i, 0);
            } else {
                for (let i = 0; i < n; ++i) {
                    if (i <= v) {
                        const b = Math.idiv(i * 255, n1);
                        this.setPixelColor(i, colorbit.rgb(b, 0, 255 - b));
                    }
                    else this.setPixelColor(i, 0);
                }
            }
            this.show();
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b). 
         * You need to call ``show`` to make the changes visible.
         * @param pixeloffset position of the NeoPixel in the strip
         * @param rgb RGB color of the LED
         */
        //% blockId="colorbit_set_pixel_color" block="%colorbit_51bit|set pixel color at %pixeloffset|to %rgb=colorbit_colors" 
        //% blockGap=8
        //% weight=80
        //% parts="colorbit" advanced=true
        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset >> 0, rgb >> 0);
        }

        /**
         * Sets the number of pixels in a matrix shaped strip
         * @param width number of pixels in a row
         */
        //% blockId=colorbit_set_matrix_width block="%colorbit_51bit|set matrix width %width"
        //% blockGap=8
        //% weight=5
        //% parts="colorbit" advanced=true
        setMatrixWidth(width: number) {
            this._matrixWidth = Math.min(this._length, width >> 0);
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b) in a matrix shaped strip 
         * You need to call ``show`` to make the changes visible.
         * @param x horizontal position
         * @param y horizontal position
         * @param rgb RGB color of the LED
         */
        //% blockId="colorbit_set_matrix_color" block="%colorbit_51bit|set matrix color at x %x|y %y|to %rgb=colorbit_colors" 
        //% weight=4
        //% parts="colorbit" advanced=true
        setMatrixColor(x: number, y: number, rgb: number) {
            if (this._matrixWidth <= 0) return; // not a matrix, ignore
            x = x >> 0;
            y = y >> 0;
            rgb = rgb >> 0;
            const cols = Math.idiv(this._length, this._matrixWidth);
            if (x < 0 || x >= this._matrixWidth || y < 0 || y >= cols) return;
            let i = x + y * this._matrixWidth;
            this.setPixelColor(i, rgb);
        }
        
        /**
         * For NeoPixels with RGB+W LEDs, set the white LED brightness. This only works for RGB+W NeoPixels.
         * @param pixeloffset position of the LED in the strip
         * @param white brightness of the white LED
         */
        //% blockId="colorbit_set_pixel_white" block="%colorbit_51bit|set pixel white LED at %pixeloffset|to %white" 
        //% blockGap=8
        //% weight=80
        //% parts="colorbit" advanced=true
        setPixelWhiteLED(pixeloffset: number, white: number): void {            
            if (this._mode === BitColorMode.RGBW) {
                this.setPixelW(pixeloffset >> 0, white >> 0);
            }
        }

        /** 
         * Send all the changes to the strip.
         */
        //% blockId="colorbit_show" block="%colorbit_51bit|show" blockGap=8
        //% weight=79 advanced=true
        //% parts="colorbit"
        show() {
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        /**
         * Turn off all LEDs.
         * You need to call ``show`` to make the changes visible.
         */
        //% blockId="colorbit_clear" block="%colorbit_51bit|clear"
        //% weight=76
        //% parts="colorbit"
        clear(): void {
            const stride = this._mode === BitColorMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
            this.show();
        }

        /**
         * Gets the number of pixels declared on the strip
         */
        //% blockId="colorbit_length" block="%colorbit_51bit|length" blockGap=8
        //% weight=60 advanced=true
        length() {
            return this._length;
        }

        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        //% blockId="colorbit_set_brightness" block="%colorbit_51bit|set brightness %brightness" blockGap=8
        //% weight=59
        //% parts="colorbit" advanced=true
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * Apply brightness to current colors using a quadratic easing function.
         **/
        //% blockId="colorbit_each_brightness" block="%colorbit_51bit|ease brightness" blockGap=8
        //% weight=58
        //% parts="colorbit" advanced=true
        easeBrightness(): void {
            const stride = this._mode === BitColorMode.RGBW ? 4 : 3;
            const br = this.brightness;
            const buf = this.buf;
            const end = this.start + this._length;
            const mid = Math.idiv(this._length, 2);
            for (let i = this.start; i < end; ++i) {
                const k = i - this.start;
                const ledoffset = i * stride;
                const br = k > mid
                    ? Math.idiv(255 * (this._length - 1 - k) * (this._length - 1 - k), (mid * mid))
                    : Math.idiv(255 * k * k, (mid * mid));
                serial.writeLine(k + ":" + br);
                const r = (buf[ledoffset + 0] * br) >> 8; buf[ledoffset + 0] = r;
                const g = (buf[ledoffset + 1] * br) >> 8; buf[ledoffset + 1] = g;
                const b = (buf[ledoffset + 2] * br) >> 8; buf[ledoffset + 2] = b;
                if (stride == 4) {
                    const w = (buf[ledoffset + 3] * br) >> 8; buf[ledoffset + 3] = w;
                }
            }
        }

        /** 
         * Create a range of LEDs.
         * @param start offset in the LED strip to start the range
         * @param length number of LEDs in the range. eg: 4
         */
        //% weight=89
        //% blockId="colorbit_range" block="%colorbit_51bit|range from %start|with %length|leds"
        //% parts="colorbit"
        //% blockSetVariable=range
        //% advanced=true
        range(start: number = 0, length: number = 25): Strip {
            start = start >> 0;
            length = length >> 0;
            let strip = new Strip();
            strip.buf = this.buf;
            strip.pin = this.pin;
            strip.brightness = this.brightness;
            strip.start = this.start + Math.clamp(0, this._length - 1, start);
            strip._length = Math.clamp(0, this._length - (strip.start - this.start), length);
            strip._matrixWidth = 0;
            strip._mode = this._mode;
            strip.ismulticolor=this.ismulticolor;
            return strip;
        }

        /**
         * Shift LEDs forward and clear with zeros.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to shift forward, eg: 1
         */
        //% blockId="colorbit_shift" block="%colorbit_51bit|shift pixels by %offset" blockGap=8
        //% weight=40
        //% parts="colorbit"
        //% advanced=true
        shift(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === BitColorMode.RGBW ? 4 : 3;
            this.buf.shift(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * Rotate LEDs forward.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to rotate forward, eg: 1
         */
        //% blockId="colorbit_rotate" block="%colorbit_51bit|rotate pixels by %offset" blockGap=8
        //% weight=39
        //% parts="colorbit"
        //% advanced=true
        rotate(offset: number = 1): void {
            offset = offset >> 0;
            const stride = this._mode === BitColorMode.RGBW ? 4 : 3;
            this.buf.rotate(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * Set the pin where the colorbit is connected, defaults to P0.
         */
        //% weight=10
        //% parts="colorbit" advanced=true
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }

        /**
         * Estimates the electrical current (mA) consumed by the current light configuration.
         */
        //% weight=9 blockId=colorbit_power block="%colorbit_51bit|power (mA)"
        //% advanced=true
        power(): number {
            const stride = this._mode === BitColorMode.RGBW ? 4 : 3;
            const end = this.start + this._length;
            let p = 0;
            for (let i = this.start; i < end; ++i) {
                const ledoffset = i * stride;
                for (let j = 0; j < stride; ++j) {
                    p += this.buf[i + j];
                }
            }
            return Math.idiv(this.length(), 2) /* 0.5mA per colorbit */
                + Math.idiv(p * 433, 10000); /* rought approximation */
        }

        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === BitColorMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === BitColorMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== BitColorMode.RGBW)
                return;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            let end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                let ledoffset = i * 4;
                buf[ledoffset + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride = this._mode === BitColorMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== BitColorMode.RGBW)
                return;

            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 4;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            buf[pixeloffset + 3] = white;
        }
    }

    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @param pin the pin where the colorbit is connected.
     * @param numleds number of leds in the strip, eg: 25
     */
    //% blockId="colorbit_create" block="NeoPixel at pin %pin|with %numleds|leds as %mode"
    //% weight=90 blockGap=8
    //% parts="colorbit"
    //% trackArgs=0,2
    //% blockSetVariable=colorbit_51bit
    //% advanced=true
    export function create(pin: DigitalPin = DigitalPin.P0, numleds: number = 25, mode: BitColorMode): Strip {
        let strip = new Strip();
        let stride = mode === BitColorMode.RGBW ? 4 : 3;
        strip.buf = pins.createBuffer(numleds * stride);
        strip.start = 0;
        strip._length = numleds;
        strip._mode = mode;
        strip._matrixWidth = 0;
        strip.setBrightness(16);
        strip.setPin(pin);
        strip.ismulticolor=false;
        strip.lastcolor=BitColors.Red;
        return strip;
    }
    
    /**
     * Init colorbit.
     * @param pin the pin where the colorbit is connected.
     */
    //% blockId="colorbit_initcolorbit" block="ColorBit leds at pin %pin| as %mode"
    //% weight=101 blockGap=8
    //% parts="colorbit"
    //% trackArgs=0,2
    //% blockSetVariable=colorbit_51bit
    export function initColorBit(pin: DigitalPin = DigitalPin.P0, mode: BitColorMode): Strip {
        let strip = new Strip();
        let stride = mode === BitColorMode.RGBW ? 4 : 3;
        strip.buf = pins.createBuffer(25 * stride);
        strip.start = 0;
        strip._length = 25;
        strip._mode = mode;
        strip._matrixWidth = 0;
        strip.setBrightness(16);
        strip.setPin(pin);
        strip.ismulticolor=false;
        strip.lastcolor=BitColors.Red;
        return strip;
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=1
    //% blockId="colorbit_rgb" block="red %red|green %green|blue %blue"
    //% advanced=true
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
    */
    //% weight=2 blockGap=8
    //% blockId="colorbit_colors" block="%color"
    //% advanced=true
    export function colors(color: BitColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }

    /**
     * Converts a hue saturation luminosity value into a RGB color
     * @param h hue from 0 to 360
     * @param s saturation from 0 to 99
     * @param l luminosity from 0 to 99
     */
    //% blockId=colorbitHSL block="hue %h|saturation %s|luminosity %l"
    //% advanced=true
    export function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);
        
        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);
        let c = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]
        let h1 = Math.idiv(h, 60);//[0,6]
        let h2 = Math.idiv((h - h1 * 60) * 256, 60);//[0,255]
        let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
        let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h1 == 0) {
            r$ = c; g$ = x; b$ = 0;
        } else if (h1 == 1) {
            r$ = x; g$ = c; b$ = 0;
        } else if (h1 == 2) {
            r$ = 0; g$ = c; b$ = x;
        } else if (h1 == 3) {
            r$ = 0; g$ = x; b$ = c;
        } else if (h1 == 4) {
            r$ = x; g$ = 0; b$ = c;
        } else if (h1 == 5) {
            r$ = c; g$ = 0; b$ = x;
        }
        let m = Math.idiv((Math.idiv((l * 2 << 8), 100) - c), 2);
        let r = r$ + m;
        let g = g$ + m;
        let b = b$ + m;
        return packRGB(r, g, b);
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }
}
