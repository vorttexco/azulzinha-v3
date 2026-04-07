interface ArrowIconProps {
    width?: number;
    height?: number;
    color?: string;
    className?: string;
    stroke?: string;
    strokeWidth?: number;
}

const ArrowIcon = ({
    width = 22,
    height = 16,
    color = "#FC8F01",
    className,
    stroke,
    strokeWidth,
}: ArrowIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M13.75 16L12.123 14.4242L17.6 9.1206L0 9.1206L0 6.90137L17.6 6.90137L12.1 1.57547L13.727 0L22 8.01115L13.75 16Z"
                fill={stroke || color}
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};

export default ArrowIcon;