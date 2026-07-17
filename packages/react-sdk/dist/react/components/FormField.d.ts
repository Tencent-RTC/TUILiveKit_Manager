import React from '../../react';
import './FormField.css';
interface FormFieldProps {
    label?: React.ReactNode;
    labelWidth?: number;
    requiredMark?: boolean;
    help?: React.ReactNode;
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
/**
 * 轻量表单布局组件 — 仅做 label + 内容的布局，
 * **不劫持** 子组件的 value / onChange（避免 TDesign FormItem 的 cloneElement 问题）。
 */
export declare function FormField({ label, labelWidth, requiredMark, help, children, style, className, }: FormFieldProps): React.JSX.Element;
interface FormLayoutProps {
    children: React.ReactNode;
    labelWidth?: number;
    className?: string;
    style?: React.CSSProperties;
}
/**
 * 表单容器 — 仅提供垂直堆叠布局，不做任何数据管理。
 */
export declare function FormLayout({ children, labelWidth, className, style }: FormLayoutProps): React.JSX.Element;
export {};
